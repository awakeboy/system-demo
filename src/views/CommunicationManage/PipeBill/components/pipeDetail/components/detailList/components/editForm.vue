<template>
  <div>
    <el-form ref="form" :model="form" label-width="150px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="管道编号：" prop="Num">
            <el-input
              v-model="form.Num"
              placeholder="请输入管道编号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="硅芯管编号：" prop="PipeNumber">
            <el-input
              v-model="form.PipeNumber"
              placeholder="请输入管道编号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="管道色标：" prop="Color">
            <el-input
              v-model="form.Color"
              placeholder="管道色标"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="使用情况：" prop="State">
            <el-input
              v-model="form.State"
              placeholder="请输入使用情况"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="租赁公司：" prop="Company">
            <el-input
              v-model="form.Company"
              placeholder="请输入租赁公司"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="租赁用途：" prop="Used">
            <el-input
              v-model="form.Used"
              placeholder="请输入租赁用途"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="租赁到期时间：" prop="Time">
            <el-input
              v-model="form.Time"
              placeholder="请输入租赁到期时间"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="线缆型号：" prop="CableModel">
            <el-input
              v-model="form.CableModel"
              placeholder="请输入线缆型号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>

        <el-col :span="12">
          <el-form-item label="具体业务：" prop="DetailWork">
            <el-input
              v-model="form.DetailWork"
              placeholder="请输入具体业务"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注：">
            <el-input
              v-model="form.Note"
              placeholder="请输入"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
      <!-- <el-row>
        <el-col :span="12">
          <el-form-item label="贯通测试：" prop="Test">
            <el-input
              v-model="form.Test"
              placeholder="请输入贯通测试"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管道畅通：" prop="Unblocked">
            <el-radio v-model="form.Unblocked" label="1">畅通</el-radio>
            <el-radio v-model="form.Unblocked" label="0">不畅通</el-radio>
          </el-form-item>
        </el-col>
      </el-row> -->
      <!--
      <el-row>
        <el-col :span="12">
          <el-form-item label="密闭性" prop="leakproofness">
            <el-radio v-model="form.leakproofness" label="1">密闭性合格</el-radio>
            <el-radio v-model="form.leakproofness" label="0">密闭性不合格</el-radio>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管道位置" prop="PipePosition">
            <el-input
              v-model="form.PipePosition"
              placeholder="请输入管道位置"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="过桥管道型号/长度：" prop="PipeModel">
            <el-input
              v-model="form.PipeModel"
              placeholder="请输入过桥管道型号/长度"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="管道问题：" prop="PipeIssue">
            <el-input
              v-model="form.PipeIssue"
              placeholder="请输入管道问题"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="是否有隧道长度/位置：" prop="HasTunnel">
            <el-input
              v-model="form.HasTunnel"
              placeholder="请输入"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="经度：">
            <el-input
              v-model="form.Lat"
              placeholder="请输入经度"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="纬度：" prop="HasTunnel">
            <el-input
              v-model="form.Lng"
              placeholder="请输入纬度"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="地址：">
            <el-input
              v-model="form.Destination"
              placeholder="请输入地址"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="工程名称：" prop="HasTunnel">
            <el-input
              v-model="form.ProjectName"
              placeholder="请输入工程名称"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="施工地点：">
            <el-input
              v-model="form.JobLocation"
              placeholder="请输入施工地点"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row> -->
      <el-row>

        <!-- <el-col :span="12">
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
        </el-col> -->
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
          Num: '',
          Position: '',
          Color: '',
          State: '',
          Company: '',
          Used: '',
          Time: '',
          CableModel: '',
          DetailWork: '',
          Test: '',
          Unblocked: '',
          leakproofness: '',
          PipePosition: '',
          PipeModel: '',
          PipeIssue: '',
          HasTunnel: '',
          Note: '',
          Lat: '',
          Lng: '',
          Destination: '',
          ProjectName: '',
          JobLocation: ''
        }
      }
    }
  },
  data() {
    return {
      loading: false,
      rules: {
        // HoleIndex: [
        //   { required: true, message: '请输入管道编号', trigger: 'blur' }
        // ],
        // StartNum: [
        //   { required: true, message: '请输入管道位置', trigger: 'blur' }
        // ],
        // EndNum: [
        //   { required: true, message: '请输入管道色标', trigger: 'blur' }
        // ],
        // HoleNum: [
        //   { required: true, message: '请输入人手孔编号', trigger: 'blur' }
        // ],
        // PipeModel: [
        //   { required: true, message: '请输入人管道类型/规格编号', trigger: 'blur' }
        // ],
        // Count: [
        //   { required: true, message: '请输入管孔数', trigger: 'blur' }
        // ]
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

