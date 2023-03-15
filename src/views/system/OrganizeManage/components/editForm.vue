<template>
  <div>
    <el-form ref="info" :model="info" label-width="115px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="组织名称：" prop="OrganizeName">
            <el-input
              v-model="info.OrganizeName"
              placeholder="请输入组织名称"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="组织编码：" prop="OrganizeCode">
            <el-input
              v-model="info.OrganizeCode"
              placeholder="请输入组织编码"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="联系人：" prop="ContactPerson">
            <el-input
              v-model="info.ContactPerson"
              placeholder="请输入联系人"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="联系电话：" prop="ContactTel">
            <el-input
              v-model="info.ContactTel"
              placeholder="请输入联系电话"
              maxlength="60"
              show-word-limit
              type="number"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="联系地址：" prop="Address">
            <el-input
              v-model="info.Address"
              placeholder="请输入联系地址"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备注：" prop="Description">
            <el-input
              v-model="info.Description"
              placeholder="请输入备注"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="资质证书号：" prop="CertificateNO">
            <el-input
              v-model="info.CertificateNO"
              maxlength="20"
              show-word-limit
              type="number"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item>
            <span>（请上传DWG格式）</span>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-row>
            <el-col :span="12">
              <el-form-item label="设计院logo：" prop="LogoList">
                <el-upload
                  ref="LogoList"
                  action="action"
                  :on-remove="handleRemove.bind(this,'LogoList')"
                  :on-change="handleChange.bind(this,'LogoList')"
                  :auto-upload="false"
                  :limit="1"
                  :file-list="info.LogoList"
                  accept=".dwg"
                  :on-exceed="handleExceed.bind(this,'LogoList')"
                >
                  <el-button size="small" type="primary">+上传</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="批准：" prop="ApprovalList">
                <el-upload
                  ref="ApprovalList"
                  action="action"
                  :on-remove="handleRemove.bind(this,'ApprovalList')"
                  :on-change="handleChange.bind(this,'ApprovalList')"
                  :auto-upload="false"
                  :limit="1"
                  :file-list="info.ApprovalList"
                  accept=".dwg"
                  :on-exceed="handleExceed.bind(this,'ApprovalList')"
                >
                  <el-button size="small" type="primary">+上传</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="审核：" prop="ExamineList">
                <el-upload
                  ref="ExamineList"
                  action="action"
                  :on-remove="handleRemove.bind(this,'ExamineList')"
                  :on-change="handleChange.bind(this,'ExamineList')"
                  :auto-upload="false"
                  :limit="1"
                  :file-list="info.ExamineList"
                  accept=".dwg"
                  :on-exceed="handleExceed.bind(this,'ExamineList')"
                >
                  <el-button size="small" type="primary">+上传</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="校验：" prop="CheckList">
                <el-upload
                  ref="CheckList"
                  action="action"
                  :on-remove="handleRemove.bind(this,'CheckList')"
                  :on-change="handleChange.bind(this,'CheckList')"
                  :auto-upload="false"
                  :limit="1"
                  :file-list="info.CheckList"
                  accept=".dwg"
                  :on-exceed="handleExceed.bind(this,'CheckList')"
                >
                  <el-button size="small" type="primary">+上传</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="会签：" prop="JointlySignList">
                <el-upload
                  ref="JointlySignList"
                  action="action"
                  :on-remove="handleRemove.bind(this,'JointlySignList')"
                  :on-change="handleChange.bind(this,'JointlySignList')"
                  :auto-upload="false"
                  :limit="1"
                  :file-list="info.JointlySignList"
                  accept=".dwg"
                  :on-exceed="handleExceed.bind(this,'JointlySignList')"
                >
                  <el-button size="small" type="primary">+上传</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="编制/主设：" prop="OrganizationList">
                <el-upload
                  ref="OrganizationList"
                  action="action"
                  :on-remove="handleRemove.bind(this,'OrganizationList')"
                  :on-change="handleChange.bind(this,'OrganizationList')"
                  :auto-upload="false"
                  :limit="1"
                  :file-list="info.OrganizationList"
                  accept=".dwg"
                  :on-exceed="handleExceed.bind(this,'OrganizationList')"
                >
                  <el-button size="small" type="primary">+上传</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
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
import axios from 'axios'
import { getToken } from '@/utils/auth'
import { getOrgListAPI, AddOrganizeAPI, UpdateOrganizeAPI } from '@/api/system'
import { validateMobile } from '@/utils/rules'

export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {
          OrganizeID: '', // 组织ID
          ParentID: '', // 父级ID
          OrganizeCode: '', // 组织编码
          OrganizeName: '', // 组织名字
          OrganizeLogin: '',
          ContactPerson: '', // 联系人
          ContactTel: '', // 联系电话
          Address: '', // 地址
          Description: '', // 说明
          Level: '0', // 设计院资质等级
          CertificateNO: '', // 资质证书号
          Logo: '', // 设计院logo
          Proportion: '', // 分成比例
          Signature: '', // 编制，空置
          OrganizeType: '', // 组织机构类型
          Approval: '', // 批准
          Examine: '', // 审核
          Check: '', // 校验
          JointlySign: '', // 会签
          Organization: '', // 编制
          Discount: '' // 折扣
        }
      }
    },
    dialogEditVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const ListCheck = (rule, value, callback) => {
      if (value.length === 0) {
        return callback(new Error('请选择dwg文件'))
      }
      callback()
    }
    return {
      loading: false,
      needUpload: { LogoList: false, ApprovalList: false, ExamineList: false, CheckList: false, JointlySignList: false, OrganizationList: false },
      treeData: [],
      info: {
        LogoList: [], // 设计院logo
        ApprovalList: [], // 批准
        ExamineList: [], // 审核
        CheckList: [], // 校验
        JointlySignList: [], // 会签
        OrganizationList: [] // 编制
      },
      rules: {
        OrganizeName: [
          { required: true, message: '请输入组织名称', trigger: 'blur' }
        ],
        OrganizeCode: [
          { required: true, message: '请输入组织编码', trigger: 'blur' }
        ],
        ContactPerson: [
          { required: true, message: '请输入联系人', trigger: 'blur' }
        ],
        ContactTel: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { validator: validateMobile, trigger: 'blur' }
        ],
        Address: [
          { required: true, message: '请输入联系地址', trigger: 'blur' }
        ],
        CertificateNO: [
          { required: true, message: '请输入资质证书号', trigger: 'blur' }
        ],
        LogoList: [
          { required: true, message: '请选择dwg文件', trigger: 'blur' },
          { validator: ListCheck, trigger: 'blur' }
        ],
        ApprovalList: [
          { required: true, message: '请选择dwg文件', trigger: 'blur' },
          { validator: ListCheck, trigger: 'blur' }
        ],
        ExamineList: [
          { required: true, message: '请选择dwg文件', trigger: 'blur' },
          { validator: ListCheck, trigger: 'blur' }
        ],
        CheckList: [
          { required: true, message: '请选择dwg文件', trigger: 'blur' },
          { validator: ListCheck, trigger: 'blur' }
        ],
        JointlySignList: [
          { required: true, message: '请选择dwg文件', trigger: 'blur' },
          { validator: ListCheck, trigger: 'blur' }
        ],
        OrganizationList: [
          { required: true, message: '请选择dwg文件', trigger: 'blur' },
          { validator: ListCheck, trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    dialogEditVisible() {
      if (this.dialogEditVisible) {
        this.info = {
          ...this.info,
          ...this.form
        }
        this.setFileName()
        this.getData()
      } else {
        this.resetForm('info')
      }
    }
  },
  created() {
    this.info = {
      ...this.info,
      ...this.form
    }
    this.setFileName()
    this.getData()
  },
  mounted() {
  },
  methods: {
    setFileName() {
      if (this.info.OrganizeID) { // 编辑
        this.info.LogoList = this.info.Logo ? [
          {
            name: this.info.Logo,
            url: ''
          }
        ] : []
        this.info.ApprovalList = this.info.Approval ? [
          {
            name: this.info.Approval,
            url: ''
          }
        ] : []
        this.info.ExamineList = this.info.Examine ? [
          {
            name: this.info.Examine,
            url: ''
          }
        ] : []
        this.info.CheckList = this.info.Check ? [
          {
            name: this.info.Check,
            url: ''
          }
        ] : []
        this.info.JointlySignList = this.info.JointlySign ? [
          {
            name: this.info.JointlySign,
            url: ''
          }
        ] : []
        this.info.OrganizationList = this.info.Organization ? [
          {
            name: this.info.Organization,
            url: ''
          }
        ] : []
        for (var i in this.needUpload) {
          this.needUpload[i] = false
        }
      } else { // 新增
        for (var j in this.needUpload) {
          this.needUpload[j] = true
        }
      }
    },
    changeVal1() {
      this.$refs.elcascader1.dropDownVisible = false
    },
    // 获取列表
    getData() {
      const params = {
        OrganizeName: '', // 名称
        OrganizeCode: '', // 编码
        OrganizeType: '', // 类型
        OrganizeCode1: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid']
      }
      getOrgListAPI(params).then(res => {
        const data = res.Data
        const changeList = (arr) => {
          arr.forEach(v => {
            if (v.children && v.children.length !== 0) {
              changeList(v.children)
            } else {
              delete v.children
            }
            v.value = v.OrganizeID
            v.label = v.OrganizeName
          })
        }
        changeList(data)
        // 递归自己
        function getFilterArr(arr, tar) {
          return arr.filter(function(item, i) {
            if (item.children) {
              item.children = getFilterArr(item.children, tar)
            }
            return item.OrganizeID !== tar
          })
        }
        const data2 = getFilterArr(data, this.info.OrganizeID)
        this.treeData = data2
      })
    },
    // 上传文件
    uploadFile() {
      // 上传文件
      const data = new FormData()
      data.append('Token', getToken())
      data.append('UserID', localStorage['ai-userid'])
      // data.append('PersonalID', localStorage['ai-userid'])
      // data.append('OrganizeCode', localStorage['ai-orgcode'])
      data.append('OrganizeName', this.info.OrganizeName)
      data.append('OrganizeID', this.info.OrganizeID)
      if (this.needUpload.LogoList) {
        data.append('file1', this.info.LogoList[0].raw)
      }
      if (this.needUpload.ApprovalList) {
        data.append('file2', this.info.ApprovalList[0].raw)
      }
      if (this.needUpload.ExamineList) {
        data.append('file3', this.info.ExamineList[0].raw)
      }
      if (this.needUpload.CheckList) {
        data.append('file4', this.info.CheckList[0].raw)
      }
      if (this.needUpload.JointlySignList) {
        data.append('file5', this.info.JointlySignList[0].raw)
      }
      if (this.needUpload.OrganizationList) {
        data.append('file6', this.info.OrganizationList[0].raw)
      }
      axios.post(process.env.VUE_APP_BASE_API + '/api/data/OrgImg', data).then(res => {
        if (res.data.Rows.result === '1') { // 1：操作成功，关掉窗体
          this.$message({
            message: res.data.Rows.remark || '操作成功',
            type: 'success'
          })
        } else if (res.data.Rows.result === '0') { // 0:操作失败
          this.$message({
            message: res.data.Rows.remark || '操作失败',
            type: 'error'
          })
        } else if (res.data.Rows.result === '2') { // 2、红色字体操作成功
          this.$message({
            message: res.data.Rows.remark || '操作成功',
            type: 'error'
          })
        } else if (res.data.Rows.result === '-1') { // -1：excel内部异常
          this.$message({
            message: res.data.Rows.remark || '内部异常',
            type: 'error'
          })
        } else {
          this.$message({
            message: res.data.Rows.remark,
            type: 'error'
          })
        }
      }).catch(res => {
      })
    },
    // 点击 保存btn 新增/编辑
    save() {
      this.$refs['info'].validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.info.OrganizeID) { // 编辑
            const params = {
              OrganizeCode1: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Update: [
                {
                  OrganizeID: this.info.OrganizeID, // 组织ID
                  ParentID: this.info.ParentID, // 父级ID
                  OrganizeCode: this.info.OrganizeCode, // 组织编码
                  OrganizeName: this.info.OrganizeName, // 组织名字
                  OrganizeLogin: this.info.OrganizeCode,
                  ContactPerson: this.info.ContactPerson, // 联系人
                  ContactTel: this.info.ContactTel, // 联系电话
                  Address: this.info.Address, // 地址
                  Description: this.info.Description, // 说明
                  Level: this.info.Level, // 设计院资质等级
                  CertificateNO: this.info.CertificateNO, // 资质证书号
                  Proportion: this.info.Proportion, // 分成比例
                  Discount: this.info.Discount, // 折扣
                  Signature: this.info.Signature, // 编制，空置
                  OrganizeType: this.info.OrganizeType, // 组织机构类型
                  Logo: this.info.LogoList[0] ? this.info.LogoList[0].name : '', // 设计院logo
                  Approval: this.info.ApprovalList[0] ? this.info.ApprovalList[0].name : '', // 批准
                  Examine: this.info.ExamineList[0] ? this.info.ExamineList[0].name : '', // 审核
                  Check: this.info.CheckList[0] ? this.info.CheckList[0].name : '', // 校验
                  JointlySign: this.info.JointlySignList[0] ? this.info.JointlySignList[0].name : '', // 会签
                  Organization: this.info.OrganizationList[0] ? this.info.OrganizationList[0].name : '' // 编制
                }
              ]
            }
            // 处理父级ID
            if (typeof this.info.ParentID === 'object' && this.info.ParentID) {
              params.Update[0].ParentID = this.info.ParentID[this.info.ParentID.length - 1] || ''
            } else {
              params.Update[0].ParentID = this.info.ParentID
            }
            UpdateOrganizeAPI(params).then(res => {
              this.closeLoading()
              if (res.Rows.result === '1') {
                this.uploadFile()
                // this.$message({
                //   message: '修改成功',
                //   type: 'success'
                // })
                this.$emit('closeDialog')
              } else {
                this.$message({
                  message: res.Rows.remark,
                  type: 'error'
                })
              }
            }).catch(res => {
              this.closeLoading()
            })
          } else { // 新增
            const params = {
              OrganizeCode1: localStorage['ai-orgcode'],
              UserID: localStorage['ai-userid'],
              Innsert: [
                {
                  ParentID: '', // 父级ID
                  OrganizeCode: this.info.OrganizeCode, // 组织编码
                  OrganizeName: this.info.OrganizeName, // 组织名字
                  OrganizeLogin: this.info.OrganizeCode,
                  ContactPerson: this.info.ContactPerson, // 联系人
                  ContactTel: this.info.ContactTel, // 联系电话
                  Address: this.info.Address, // 地址
                  Description: this.info.Description, // 说明
                  Level: this.info.Level, // 设计院资质等级
                  CertificateNO: this.info.CertificateNO, // 资质证书号
                  Proportion: this.info.Proportion, // 分成比例
                  Discount: this.info.Discount, // 折扣
                  Signature: this.info.Signature, // 编制，空置
                  OrganizeType: this.info.OrganizeType, // 组织机构类型
                  Logo: this.info.LogoList[0] ? this.info.LogoList[0].name : '', // 设计院logo
                  Approval: this.info.ApprovalList[0] ? this.info.ApprovalList[0].name : '', // 批准
                  Examine: this.info.ExamineList[0] ? this.info.ExamineList[0].name : '', // 审核
                  Check: this.info.CheckList[0] ? this.info.CheckList[0].name : '', // 校验
                  JointlySign: this.info.JointlySignList[0] ? this.info.JointlySignList[0].name : '', // 会签
                  Organization: this.info.OrganizationList[0] ? this.info.OrganizationList[0].name : '' // 编制
                }
              ]
            }
            if (typeof this.info.ParentID === 'string') {
              params.Innsert[0].ParentID = this.info.ParentID
            } else {
              if (this.info.ParentID) {
                params.Innsert[0].ParentID = this.info.ParentID[this.info.ParentID.length - 1] || ''
              }
            }
            AddOrganizeAPI(params).then(res => {
              this.closeLoading()
              if (res.Rows.result === '1') {
                this.info.OrganizeID = 'bea78a6579fe4d0db9b1846b1336235b'
                this.uploadFile()
                // this.$message({
                //   message: '新增成功',
                //   type: 'success'
                // })
                this.$emit('closeDialog')
              } else {
                this.$message({
                  message: res.Rows.remark,
                  type: 'error'
                })
              }
            }).catch(res => {
              this.closeLoading()
            })
          }
        }
      })
    },
    handleExceed(type, files, fileList) {
      if (files[0].name.indexOf('.dwg') === -1) {
        this.$message({
          message: '请选择 .dwg 格式的文件',
          type: 'warning'
        })
        return
      }
      this.$set(fileList[0], 'raw', files[0])
      this.$set(fileList[0], 'name', files[0].name)
      this.$refs[type].clearFiles()// 清除文件
      this.$refs[type].handleStart(files[0])// 选择文件后的赋值方法
    },
    // 改变文件，需要重新上传
    handleChange(type, files, fileList) {
      if (fileList.length !== 0) {
        this.needUpload[type] = true
        const list = []
        fileList.forEach(v => {
          if (v.name.indexOf('.dwg') !== -1) {
            list.push(v)
          } else {
            this.$message({
              message: '请选择 .dwg 格式的文件',
              type: 'warning'
            })
          }
        })
        this.info[type] = list
      } else {
        this.info[type] = fileList
      }
    },
    handleRemove(type, files, fileList) {
      this.info[type] = fileList
    },
    closeDialog() {
      this.$emit('closeDialog')
    },
    closeLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.info.LogoList = []
      this.info.ApprovalList = []
      this.info.ExamineList = []
      this.info.CheckList = []
      this.info.JointlySignList = []
      this.info.OrganizationList = []
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
