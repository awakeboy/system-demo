<template>
  <div>
    <el-form ref="form" :model="form" label-width="150px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="路段名称：" prop="RoadName">
            <el-input
              v-model="form.RoadName"
              placeholder="请输入路段名称"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="里程（KM）" prop="Mileage">
            <el-input
              v-model="form.Mileage"
              placeholder="请输入里程"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="起始桩号（KM）：" prop="StartNum">
            <el-input
              v-model="form.StartNum"
              placeholder="请输入起始桩号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="终端桩号（KM）：" prop="EndNum">
            <el-input
              v-model="form.EndNum"
              placeholder="请输入终端桩号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="主线人孔数：" prop="HoleNumber">
            <el-input
              v-model="form.HoleNumber"
              placeholder="请输入主线人孔数"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="创建时间：" prop="CreateTime">
            <el-input
              v-model="form.CreateTime"
              placeholder="请输入创建时间"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="创建人：" prop="CreateName">
            <el-input
              v-model="form.CreateName"
              placeholder="请输入创建人"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <!-- <el-row>
        <el-col :span="12">
          <el-form-item label="上传图片：">
            <el-upload
              ref="fileList"
              :multiple="true"
              :file-list="fileList"
              :on-remove="handleRemove"
              :on-change="uploadChange"
              :show-file-list="true"
              :before-upload="beforeUpload"
              class="avatar-uploader"
              action="action"
              :auto-upload="false"
              list-type="picture-card"
            />
          </el-form-item>
        </el-col>
      </el-row> -->

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
          ItemID: '',
          RoadName: '',
          Mileage: '',
          StartNum: '',
          EndNum: '',
          HoleNumber: '',
          CreateTime: '',
          CreateName: ''
        }
      }
    }
  },
  data() {
    return {
      loading: false,
      rules: {
        RoadName: [
          { required: true, message: '请输入路段名称', trigger: 'blur' }
        ],
        Mileage: [
          { required: true, message: '请输入里程', trigger: 'blur' }
        ],
        StartNum: [
          { required: true, message: '请输入起始桩号', trigger: 'blur' }
        ],
        EndNum: [
          { required: true, message: '请输入终端桩号', trigger: 'blur' }
        ],
        HoleNumber: [
          { required: true, message: '请输入主线人孔数', trigger: 'blur' }
        ],
        Img: [
          { required: true, message: '请选择图片', trigger: 'blur' }
        ]
      },
      fileList: []
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
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
          this.closeLoading()
          this.$emit('closeDialog')
          return
          if (this.form.ItemID) { // 编辑
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Update: [
                {
                  ItemID: this.form.ItemID,
                  RoadName: this.form.RoadName,
                  Mileage: this.form.Mileage,
                  StartNum: this.form.StartNum,
                  EndNum: this.form.EndNum,
                  HoleNumber: this.form.HoleNumber
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
            const params = {
              OrganizeCode: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Innsert: [
                {
                  RoadName: this.form.RoadName,
                  Mileage: this.form.Mileage,
                  StartNum: this.form.StartNum,
                  EndNum: this.form.EndNum,
                  HoleNumber: this.form.HoleNumber
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

