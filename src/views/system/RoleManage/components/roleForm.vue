<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="角色名称：" prop="RoleName">
            <el-input
              v-model="form.RoleName"
              placeholder="请输入角色名称"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="角色编码：" prop="RoleCode">
            <el-input
              v-model="form.RoleCode"
              placeholder="请输入角色编码"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
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
      <el-row class="handle">
        <el-col :span="24">
          <div class="handle">
            <el-button type="primary" :loading="loading" @click="save('form')">保存</el-button>
            <el-button type="" @click="closeDialog('form')">取消</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { addRoleAPI, editRoleAPI } from '@/api/system'
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          RoleID: '', // 角色ID
          RoleName: '', // 角色名称
          RoleCode: '', // 角色编码
          RoleSeq: '', // 排序
          Description: '' // 描述
        }
      }
    }
  },
  data() {
    return {
      loading: false,
      rules: {
        RoleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
        RoleCode: [
          { required: true, message: '请输入角色编码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击 保存
    save() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          this.loading = true
          if (this.form.RoleID) { // 编辑
            this.$message({
              message: '修改成功',
              type: 'success'
            })
            this.$emit('closeDialog')
            this.closeLoading()
            return
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Update: [
                {
                  RoleID: this.form.RoleID,
                  RoleCode: this.form.RoleCode,
                  RoleSeq: this.form.RoleSeq,
                  RoleName: this.form.RoleName,
                  Description: this.form.Description,
                  CreatePerson: '',
                  CreateDate: ''
                }
              ]
            }
            editRoleAPI(params).then(res => {
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
            this.$message({
              message: '新增成功',
              type: 'success'
            })
            this.$emit('closeDialog')
            this.closeLoading()
            return
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Innsert: [
                {
                  RoleCode: this.form.RoleCode,
                  RoleSeq: this.form.RoleSeq,
                  RoleName: this.form.RoleName,
                  Description: this.form.Description,
                  CreatePerson: '',
                  CreateDate: ''
                }
              ]
            }
            addRoleAPI(params).then(res => {
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
