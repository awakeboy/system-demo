<template>
  <div>
    <el-form ref="form" :model="form" label-width="160px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="人手孔序号：" prop="HoleIndex">
            <el-input
              v-model="form.HoleIndex"
              placeholder="请输入人手孔序号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="人手孔桩号起点" prop="StartNum">
            <el-input
              v-model="form.StartNum"
              placeholder="请输入人手孔桩号起点"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="人手孔桩号终点：" prop="EndNum">
            <el-input
              v-model="form.EndNum"
              placeholder="请输入人手孔桩号终点"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="人手孔编号：" prop="HoleNum">
            <el-input
              v-model="form.HoleNum"
              placeholder="请输入人手孔编号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>

        <el-col :span="12">
          <el-form-item label="管孔数：" prop="Count">
            <el-input
              v-model="form.Count"
              placeholder="请输入管孔数"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>

      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="过桥管箱型号/长度：" prop="BrudegPipeModel">
            <el-input
              v-model="form.BrudegPipeModel"
              placeholder="请输入管道类型"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="是否有隧道长度/位置：" prop="TunnelLength">
            <el-input
              v-model="form.TunnelLength"
              placeholder="请输入"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="管道类型/规格编号：" prop="PipeModel">
            <el-input
              v-model="form.PipeModel"
              placeholder="请输入管道类型"
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
          HoleIndex: '',
          StartNum: '',
          EndNum: '',
          HoleNum: '',
          HoleImg: '',
          PipeModel: '',
          Count: '',
          BrudegPipeModel: '',
          TunnelLength: ''
        }
      }
    }
  },
  data() {
    return {
      loading: false,
      rules: {
        HoleIndex: [
          { required: true, message: '请输入人手孔序号', trigger: 'blur' }
        ],
        StartNum: [
          { required: true, message: '请输入人手孔桩号起点', trigger: 'blur' }
        ],
        EndNum: [
          { required: true, message: '请输入人手孔桩号终点', trigger: 'blur' }
        ],
        HoleNum: [
          { required: true, message: '请输入人手孔编号', trigger: 'blur' }
        ],
        PipeModel: [
          { required: true, message: '请输入人管道类型/规格编号', trigger: 'blur' }
        ],
        Count: [
          { required: true, message: '请输入管孔数', trigger: 'blur' }
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

