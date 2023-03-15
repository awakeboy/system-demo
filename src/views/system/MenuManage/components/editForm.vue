<template>
  <div class="app">
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="菜单名称：" prop="MenuName">
            <el-input
              v-model="form.MenuName"
              placeholder="请输入"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="编码：" prop="MenuCode">
            <el-input
              v-model="form.MenuCode"
              placeholder="请输入编码"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="上级菜单：">
            <el-cascader
              ref="elcascader1"
              v-model="form.ParentID"
              placeholder="请选择"
              style="width: 100%;"
              :options="menuList"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              clearable
              filterable
              @change="changeVal1"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排序：" prop="MenuSeq">
            <el-input
              v-model="form.MenuSeq"
              placeholder="请输入"
              maxlength="60"
              show-word-limit
              type="number"
              @input="changeNum"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="是否可见：">
            <el-checkbox v-model="form.IsVisible" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否启用：">
            <el-checkbox v-model="form.IsEnable" />
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
import { addMenuAPI, editMenuAPI } from '@/api/system'
import { getInfoAPI } from '@/api/user'
export default {
  props: {
    form: {
      type: Object,
      default: function() {
        return {
          MenuName: '', // 菜单名字
          ParentID: '', // 上级菜单的编码
          MenuCode: '', // 菜单编码
          URL: '',
          IsVisible: true, // 是否可见，0可见
          IsEnable: true, // 是否启用，0启用
          MenuSeq: '' // 排序 默认1
        }
      }
    },
    dialogEditVisible: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      loading: false,
      parentMenuList: [],
      rules: {
        MenuName: [
          { required: true, message: '请输入菜单名称', trigger: 'blur' }
        ],
        MenuCode: [
          { required: true, message: '请输入菜单编码', trigger: 'blur' }
        ],
        MenuSeq: [
          { required: true, message: '请输入排序', trigger: 'blur' }
        ]
      },
      menuList: [] // 菜单列表
    }
  },
  watch: {
    dialogEditVisible() {
      if (this.dialogEditVisible) {
        this.getMenuList()
      }
    }
  },
  created() {
    this.getMenuList()
  },
  methods: {
    changeVal1() {
      this.$refs.elcascader1.dropDownVisible = false
    },
    changeNum(e) {
    // 限制长度
      if (this.form.MenuSeq.length > 3) {
        this.form.MenuSeq = this.form.MenuSeq.slice(0, 3)
      }
    },
    // 获取菜单列表
    getMenuList() {
      const params = {
        OrganizeCode: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid']
      }
      getInfoAPI(params).then(res => {
        const data = res.Data
        // 递归父级菜单列表
        const changeList = (arr) => {
          arr.forEach(v => {
            if (v.children && v.children.length !== 0) {
              changeList(v.children)
            } else {
              delete v.children
            }
            v.label = v.MenuName
            v.value = v.MenuID
          })
        }
        changeList(data)
        // 递归自己
        function getFilterArr(arr, tar) {
          return arr.filter(function(item, i) {
            if (item.children) {
              item.children = getFilterArr(item.children, tar)
            }
            return (item.MenuID !== tar) && (item.IsEnable === 1)
          })
        }
        const data2 = getFilterArr(data, this.form.MenuID)
        this.menuList = data2
      })
    },
    // 新增/编辑 保存
    save() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          this.$message({
            message: '保存成功',
            type: 'success'
          })
          // 通知父组件
          this.$emit('closeDialog')
          this.closeLoading()
          return
          if (this.form.MenuID) { // 编辑
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Update: [
                {
                  MenuID: this.form.MenuID, // 新增的时候没有
                  MenuName: this.form.MenuName,
                  MenuCode: this.form.MenuCode,
                  ParentID: this.form.ParentID,
                  IconClass: '',
                  URL: '',
                  IsVisible: this.form.IsVisible ? 1 : 0, // 是否可见 0 可见 1不可见
                  IsEnable: this.form.IsEnable ? 1 : 0, // 是否启用 0 启用 1不启用
                  IsMain: '1', // 这个字段先不管，默认给0
                  MenuSeq: this.form.MenuSeq
                }
              ]
            }
            // 处理上级菜单
            if (typeof this.form.ParentID === 'object') {
              params.Update[0].ParentID = this.form.ParentID[this.form.ParentID.length - 1] || ''
            }
            editMenuAPI(params).then(res => {
              if (res.Rows.result === '1') {
                this.$message({
                  message: '修改成功',
                  type: 'success'
                })
                // 通知父组件
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
                  MenuID: '', // 新增的时候没有
                  MenuName: this.form.MenuName,
                  MenuCode: this.form.MenuCode,
                  ParentID: this.form.ParentID,
                  IconClass: '',
                  URL: '',
                  IsVisible: this.form.IsVisible ? 1 : 0, // 是否可见 0 可见 1不可见
                  IsEnable: this.form.IsEnable ? 1 : 0, // 是否启用 0 启用 1不启用
                  IsMain: '1',
                  MenuSeq: this.form.MenuSeq
                }
              ]
            }
            // 处理上级菜单
            if (typeof this.form.ParentID === 'object') {
              params.Innsert[0].ParentID = this.form.ParentID[this.form.ParentID.length - 1] || ''
            }
            addMenuAPI(params).then(res => {
              if (res.Rows.result === '1') {
                this.$message({
                  message: '新增成功',
                  type: 'success'
                })
                // 通知父组件
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
    // 关闭dialog
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
