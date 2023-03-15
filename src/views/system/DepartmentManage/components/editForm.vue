<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="部门名称：" prop="DepartmentName">
            <el-input
              v-model="form.DepartmentName"
              placeholder="请输入部门名称"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="部门编码：" prop="DepartmenCode">
            <el-input
              v-model="form.DepartmenCode"
              placeholder="请输入部门编码"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="上级部门：" prop="ParentID">
            <el-cascader
              ref="elcascader1"
              v-model="form.ParentID"
              style="width: 100%;"
              :options="list"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              clearable
              filterable
              @change="changeVal1"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述：" prop="Description">
            <el-input
              v-model="form.Description"
              placeholder="请输入描述"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 保存/取消 -->
      <el-row>
        <el-col :span="24">
          <div class="handle">
            <el-button type="primary" :loading="loading" @click="save()">保存</el-button>
            <el-button type="" @click="closeDialog()">取消</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { getDepartmentListAPI, addDepartmentAPI, editDepartmentAPI } from '@/api/system'
export default {
  props: {
    dialogEditVisible: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object,
      default: () => {
        return {
          DepartmentID: '', // 部门ID
          DepartmentName: '', // 部门名称
          DepartmenCode: '', // 部门编码
          ParentID: '', // 上级部门
          Description: '', // 描述
          OrganizeCode: '', // 组织编码
          OrganizeID: '' // 组织ID
        }
      }
    },
    formParentList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      loading: false,
      list: [],
      rules: {
        DepartmentName: [
          { required: true, message: '请输入部门名称', trigger: 'blur' }
        ],
        DepartmenCode: [
          { required: true, message: '请输入部门编码', trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    dialogEditVisible() {
      if (this.dialogEditVisible) {
        this.getDepartmentList()
      }
    }
  },
  created() {
    this.getDepartmentList()
  },
  methods: {
    changeVal1() {
      this.$refs.elcascader1.dropDownVisible = false
    },
    // 获取部门列表
    getDepartmentList() {
      const params = {
        UserID: localStorage['ai-userid'],
        OrganizeCode: this.form.OrganizeCode,
        OrganizeID: this.form.OrganizeID,
        DepartmenCode: '', // 部门编码
        DepartmentName: '', // 部门名字
        index: 1,
        PageCount: 500
      }
      getDepartmentListAPI(params).then(res => {
        if (res.Rows.result === '1') {
          const data = res.Data
          // 递归父级菜单列表
          const changeList = (arr) => {
            arr.forEach(v => {
              if (v.children && v.children.length !== 0) {
                changeList(v.children)
              } else {
                delete v.children
              }
              v.label = v.DepartmentName
              v.value = v.DepartmentID
            })
          }
          changeList(data)

          // 递归自己
          const getFilterArr = (arr, tar) => {
            return arr.filter(function(item, i) {
              if (item.children) {
                item.children = getFilterArr(item.children, tar)
              }
              return item.DepartmentID !== tar
            })
          }
          const data2 = getFilterArr(data, this.form.DepartmentID)
          this.list = data2
        }
      })
    },
    // 点击 保存btn 新增/编辑
    save() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.form.DepartmentID) { // 编辑
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Update: [
                {
                  DepartmentID: this.form.DepartmentID,
                  OrganizeID: this.form.OrganizeID, // 组织机构的ID
                  ParentID: this.form.ParentID || '',
                  DepartmenCode: this.form.DepartmenCode,
                  DepartmentName: this.form.DepartmentName,
                  Description: this.form.Description,
                  CreatePerson: '',
                  CreateDate: '',
                  UpdatePerson: '',
                  UpdateDate: '',
                  IsDelete: '',
                  OrganizeCode: this.form.OrganizeCode
                }
              ]
            }
            // 处理父级ID
            if (typeof this.form.ParentID === 'object') {
              params.Update[0].ParentID = this.form.ParentID[this.form.ParentID.length - 1] || ''
            }
            editDepartmentAPI(params).then(res => {
              if (res.Rows.result === '1') {
                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
                this.$emit('closeDialog')
              } else {
                this.$message({
                  message: res.Rows.remark,
                  type: 'error'
                })
              }
              this.closeLoading()
            }).catch(res => {
              this.$message({
                message: res.Rows.remark,
                type: 'error'
              })
              this.closeLoading()
            })
          } else { // 新增
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Innsert: [
                {
                  OrganizeID: this.form.OrganizeID, // 组织机构的ID
                  ParentID: this.form.ParentID || '',
                  DepartmenCode: this.form.DepartmenCode,
                  DepartmentName: this.form.DepartmentName,
                  Description: this.form.Description,
                  CreatePerson: '',
                  CreateDate: '',
                  UpdatePerson: '',
                  UpdateDate: '',
                  IsDelete: '',
                  OrganizeCode: this.form.OrganizeCode
                }
              ]
            }
            // 处理父级ID
            if (typeof this.form.ParentID === 'object') {
              params.Innsert[0].ParentID = this.form.ParentID[this.form.ParentID.length - 1] || ''
            }
            addDepartmentAPI(params).then(res => {
              if (res.Rows.result === '1') {
                this.$message({
                  message: '新增成功',
                  type: 'success'
                })
                this.$emit('closeDialog')
              } else {
                this.$message({
                  message: res.Rows.remark,
                  type: 'error'
                })
              }
              this.closeLoading()
            }).catch(res => {
              this.$message({
                message: res.Rows.remark,
                type: 'error'
              })
              this.closeLoading()
            })
          }
        }
      })
    },
    closeDialog() {
      this.$emit('closeDialog')
    },
    closeLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    }
  }
}
</script>
<style lang="scss" scoped>
.handle{
  display: flex;
  justify-content: flex-end;
}
</style>
