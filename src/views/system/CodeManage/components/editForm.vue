<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="编码：" prop="Value">
            <el-input
              v-model="form.Value"
              placeholder="请输入编码"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="文本：" prop="Text">
            <el-input
              v-model="form.Text"
              placeholder="请输入文本"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="上级编号：" prop="ParentCode">
            <el-input
              v-model="form.ParentCode"
              placeholder="请输入上级编号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="描述说明：" prop="Description">
            <el-input
              v-model="form.Description"
              placeholder="请输入描述"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="是否启用：">
            <el-checkbox v-model="form.IsEnable" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="是否默认：">
            <el-checkbox v-model="form.IsDefault" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="排序：" prop="Seq">
            <el-input
              v-model="form.Seq"
              placeholder="请输入排序"
              type="number"
              @input="changeNum"
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
import { addCodeAPI, editCodeAPI } from '@/api/system'
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          CodeTypeID: '', // 数据字典类别ID
          CodeID: '', // 数据字典ID
          Value: '', // 数据字典编码
          Text: '', // 数据字典值
          ParentCode: '', // 父级数据字典
          Description: '', // 描述
          IsEnable: true, // 是否启用
          IsDefault: true, // 是否默认
          Seq: ''
        }
      }
    }
  },
  data() {
    return {
      loading: false,
      rules: {
        Value: [
          { required: true, message: '请输入编码', trigger: 'blur' }
        ],
        Text: [
          { required: true, message: '请输入文本', trigger: 'blur' }
        ],
        Seq: [
          { required: true, message: '请输入文本', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    changeNum(e) {
    // 限制长度
      if (this.form.Seq.length > 3) {
        this.form.Seq = this.form.Seq.slice(0, 3)
      }
    },
    // 点击 保存btn 新增/编辑
    save() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.form.CodeID) { // 编辑
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
                  CodeTypeID: this.form.CodeTypeID, // 数据字典类别ID
                  CodeID: this.form.CodeID, // 数据字典ID
                  Value: this.form.Value, // 数据字典编码
                  Text: this.form.Text, // 数据字典值
                  ParentCode: this.form.ParentCode, // 父级数据字典
                  Description: this.form.Description, // 描述
                  IsEnable: this.form.IsEnable ? 1 : 0, // 是否启用
                  IsDefault: this.form.IsDefault ? 1 : 0, // 是否默认
                  Seq: this.form.Seq
                }
              ]
            }
            editCodeAPI(params).then(res => {
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
                  CodeTypeID: this.form.CodeTypeID, // 数据字典类别ID
                  Value: this.form.Value, // 数据字典编码
                  Text: this.form.Text, // 数据字典值
                  ParentCode: this.form.ParentCode, // 父级数据字典
                  Description: this.form.Description, // 描述
                  IsEnable: this.form.IsEnable ? 1 : 0, // 是否启用
                  IsDefault: this.form.IsDefault ? 1 : 0, // 是否默认
                  Seq: this.form.Seq
                }
              ]
            }
            addCodeAPI(params).then(res => {
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
.handle {
  display: flex;
  justify-content: flex-end;
}
</style>

