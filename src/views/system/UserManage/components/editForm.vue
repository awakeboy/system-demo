<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户账号：" prop="UserCode">
            <el-input
              v-model="form.UserCode"
              placeholder="请输入用户账号"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户名称：" prop="UserName">
            <el-input
              v-model="form.UserName"
              placeholder="请输入用户名称"
              maxlength="60"
              show-word-limit
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="组织机构：" prop="OrganizeID">
            <el-cascader
              ref="elcascader1"
              v-model="form.OrganizeID"
              style="width: 100%;"
              :options="OrgList"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              clearable
              filterable
              placeholder="请选择或搜索"
              @change="changeOrg"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="部门：" prop="DepartmentID">
            <el-cascader
              ref="elcascader2"
              :key="cascaderKey"
              v-model="form.DepartmentID"
              style="width: 100%;"
              :options="DepartmentList"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              clearable
              filterable
              placeholder="请选择或搜索"
              @change="changeVal2"
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="手机号：" prop="UserTel">
            <el-input
              v-model="form.UserTel"
              placeholder="请输入手机号"
              type="number"
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
import { getOrgListAPI, GetDepartmentByOrgAPI, addUserAPI, editUserAPI } from '@/api/system'
import { validateMobile } from '@/utils/rules'
export default {
  props: {
    keyparams: {
      type: Object,
      default: () => {
        return {
          roleName: '', // 临时
          userCode: '',
          orgCode: ''
        }
      }
    },
    form: {
      type: Object,
      default: () => {
        return {
          OrganizeID: '', // 组织机构
          DepartmentID: '', // 部门ID
          UserID: '', // 用户ID
          UserCode: '', // 用户编码
          UserSeq: '', // 用户排序
          UserTel: '', // 用户电话
          UserName: '',
          Description: '',
          Password: '',
          OrganizeName: '',
          ConfigJSON: '',
          IsEnable: true,
          LoginCount: '',
          LastLoginDate: '',
          CreatePerson: '',
          CreateDate: '',
          UpdatePerson: '',
          UpdateDate: '',
          roleName: '', // 临时
          userCode: '',
          orgCode: ''
        }
      }
    },
    dialogEditVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      cascaderKey: 1,
      OrgList: [{
        Address: '2',
        Approval: '校核.dwg',
        ApprovalUrl: 'http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        CertificateNO: '2',
        Check: '校核.dwg',
        CheckUrl: 'http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        ContactPerson: '1',
        ContactTel: '18877776666',
        CreateDate: '2020-11-11T11:21:10',
        CreatePerson: '0af7e783c98a49008944ce2ca57f8eaf',
        Description: '2',
        Discount: '0.6',
        Examine: '校核.dwg',
        ExamineUrl: 'http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        ExpirationTime: null,
        IsDelete: 0,
        IsMember: null,
        JointlySign: '校核.dwg',
        JointlySignUrl: 'http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        Level: '0',
        Logo: '校核.dwg',
        Organization: '校核.dwg',
        OrganizeCode: '1',
        OrganizeCode1: 'JLSJ',
        OrganizeID: 'f1cc6af023cc11eb8f4e00163e127e89',
        OrganizeLogin: '1',
        OrganizeName: '1',
        OrganizeType: null,
        ParentID: '',
        Proportion: '',
        Signature: '',
        'SignatureUrl ': null,
        UpdateDate: '2020-12-02T14:17:30',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }, {
        Address: '43gsdf',
        Approval: null,
        ApprovalUrl: 'http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        CertificateNO: null,
        Check: null,
        CheckUrl: 'http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        ContactPerson: '1212',
        ContactTel: '15545454545',
        CreateDate: '2020-11-05T13:33:57',
        CreatePerson: '48ce2528c18d4097ad3cb2b88bc34705',
        Description: '',
        Discount: '0.6',
        Examine: null,
        ExamineUrl: 'http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        ExpirationTime: null,
        IsDelete: 0,
        IsMember: null,
        JointlySign: null,
        JointlySignUrl: 'http://121.41.23.111/FileDown/2020/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        Level: null,
        Logo: null,
        Organization: null,
        OrganizeCode: '123',
        OrganizeCode1: 'YYZX',
        OrganizeID: '80460fe41f2811eba7c000163e0b5c5d',
        OrganizeLogin: '123',
        OrganizeName: 'cs111',
        OrganizeType: null,
        ParentID: '',
        Proportion: null,
        Signature: null,
        'SignatureUrl ': null,
        UpdateDate: null,
        UpdatePerson: null
      }, {
        Address: '莫干山路',
        Approval: '',
        ApprovalUrl: 'http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        CertificateNO: '',
        Check: '',
        CheckUrl: 'http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        ContactPerson: '赵四',
        ContactTel: '18258892233',
        CreateDate: '2021-06-23T16:50:54',
        CreatePerson: 'c7ca16b8f40346acbe892a228173d684',
        Description: '',
        Discount: '0.6',
        Examine: '',
        ExamineUrl: 'http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        ExpirationTime: null,
        IsDelete: 0,
        IsMember: 1,
        JointlySign: '',
        JointlySignUrl: 'http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        Level: '1',
        Logo: '',
        Organization: '',
        OrganizeCode: '12345',
        OrganizeCode1: '12345',
        OrganizeID: '0160a755a8a943bba4a639aa2ab657bb',
        OrganizeLogin: '12345',
        OrganizeName: '测试',
        OrganizeType: '1',
        ParentID: '',
        Proportion: '0.4',
        Signature: '',
        'SignatureUrl ': null,
        UpdateDate: null,
        UpdatePerson: ''
      }, {
        Address: '金山路',
        Approval: '',
        ApprovalUrl: 'http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        CertificateNO: '',
        Check: '',
        CheckUrl: 'http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        ContactPerson: '林兵',
        ContactTel: '13456504455',
        CreateDate: '2021-06-28T10:51:11',
        CreatePerson: '55083b1bf4094e9f881129e4105e8e54',
        Description: '',
        Discount: '0.6',
        Examine: '',
        ExamineUrl: 'http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        ExpirationTime: null,
        IsDelete: 0,
        IsMember: 1,
        JointlySign: '',
        JointlySignUrl: 'http://121.41.23.111/FileDown/2021/OrgImg/f1cc6af023cc11eb8f4e00163e127e89/Img/校核.dwg',
        Level: '1',
        Logo: '',
        Organization: '',
        OrganizeCode: '1234567',
        OrganizeCode1: '1234567',
        OrganizeID: 'ee3f1bb9cfbb4588b3223836f01d2be8',
        OrganizeLogin: '1234567',
        OrganizeName: '嘉兴',
        OrganizeType: '1',
        ParentID: '',
        Proportion: '0.4',
        Signature: '',
        'SignatureUrl ': null,
        UpdateDate: null,
        UpdatePerson: ''
      }],
      DepartmentList: [{
        CreateDate: null,
        CreatePerson: null,
        DepartmenCode: 'pw',
        DepartmentID: '04d8c1883f4311eba7c000163e0b5c5d',
        DepartmentName: '测试',
        label: '测试',
        value: '04d8c1883f4311eba7c000163e0b5c5d',
        Description: '',
        IsDelete: 0,
        OrganizeCode: 'JLSJ',
        OrganizeID: '92c911dc0d4f43798dee9a550d9fade7',
        ParentID: '',
        UpdateDate: null,
        UpdatePerson: null,
        children: []
      }, {
        CreateDate: null,
        CreatePerson: null,
        DepartmenCode: 'pw',
        DepartmentID: '04d8c1883f4311eba7c000163e0b5c6d',
        DepartmentName: '测试2',
        value: '04d8c1883f4311eba7c000163e0b5c6d',
        label: '测试2',
        Description: '',
        IsDelete: 0,
        OrganizeCode: 'JLSJ',
        OrganizeID: '92c911dc0d4f43798dee9a550d9fade7',
        ParentID: '',
        UpdateDate: null,
        UpdatePerson: null,
        children: []
      }],
      rules: {
        UserCode: [
          { required: true, message: '请输入用户账号', trigger: 'blur' }
        ],
        UserName: [
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        OrganizeID: [
          { required: true, message: '请选择组织机构', trigger: 'change' }
        ],
        DepartmentID: [
          { required: true, message: '请选择部门', trigger: 'change' }
        ],
        UserTel: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: validateMobile, trigger: 'blur' }
        ]
      }
    }
  },
  watch: {
    dialogEditVisible() {
      if (this.dialogEditVisible) {
        this.getOrgList()
      }
    }
  },
  created() {
    this.getOrgList()
    if (this.form.userCode !== 'admin') {
      // this.disableInput = false
      // this.form.OrganizeID = ''
    }
  },
  methods: {
    changeVal2() {
      this.$refs.elcascader2.dropDownVisible = false
    },
    // 获取组织结构
    getOrgList() {
      const data = this.OrgList
      const changeList = (arr) => {
        arr.forEach(v => {
          if (v.children && v.children.length !== 0) {
            changeList(v.children)
          } else {
            delete v.children
          }
          v.label = v.OrganizeName
          v.value = v.OrganizeID
        })
      }
      changeList(data)
      this.OrgList = data
      // const params = {
      //   OrganizeName: '', // 名称
      //   OrganizeCode: '', // 编码
      //   OrganizeType: '', // 类型
      //   OrganizeCode1: localStorage['ai-orgcode'],
      //   UserID: localStorage['ai-userid']
      // }
      // getOrgListAPI(params).then(res => {
      //   const data = res.Data
      //   const changeList = (arr) => {
      //     arr.forEach(v => {
      //       if (v.children && v.children.length !== 0) {
      //         changeList(v.children)
      //       } else {
      //         delete v.children
      //       }
      //       v.label = v.OrganizeName
      //       v.value = v.OrganizeID
      //     })
      //   }
      //   changeList(data)
      //   this.OrgList = data
      //   if (this.form.OrganizeID) {
      //     this.GetDepartmentByOrg(this.form.OrganizeID)
      //   }
      // })
    },
    // 获取部门列表
    GetDepartmentByOrg(OrganizeID) {
      // const params = {
      //   OrganizeCode: localStorage['ai-orgcode'],
      //   UserID: localStorage['ai-userid'],
      //   OrganizeID: OrganizeID
      // }
      // GetDepartmentByOrgAPI(params).then(res => {
      //   if (res.Rows.result === '1') {
      //     const data = res.Data
      //     const changeList = (arr) => {
      //       arr.forEach(v => {
      //         if (v.children && v.children.length !== 0) {
      //           changeList(v.children)
      //         } else {
      //           delete v.children
      //         }
      //         v.label = v.DepartmentName
      //         v.value = v.DepartmentID
      //       })
      //     }
      //     changeList(data)
      //     this.DepartmentList = data
      //   }
      // })
    },
    changeOrg() {
      this.$refs.elcascader1.dropDownVisible = false
      this.form.DepartmentID = ''
      let OrganizeID = ''
      if (typeof this.form.OrganizeID === 'object') {
        OrganizeID = this.form.OrganizeID[this.form.OrganizeID.length - 1] || ''
      }
      if (OrganizeID) {
        this.GetDepartmentByOrg(OrganizeID)
      } else {
        this.cascaderKey = this.cascaderKey + 1
        // this.DepartmentList = []
      }
    },
    // 点击 保存btn 新增/编辑
    save() {
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          if (this.form.UserID) { // 编辑
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
                  OrganizeID: this.form.OrganizeID, // 组织机构ID
                  OrganizeCode: '',
                  DepartmentID: this.form.DepartmentID, // 部门ID
                  UserID: this.form.UserID, // 用户ID
                  UserCode: this.form.UserCode, // 用户编码
                  UserSeq: this.form.UserSeq, // 用户排序
                  UserTel: this.form.UserTel, // 用户电话
                  UserName: this.form.UserName,
                  Description: this.form.Description,
                  Password: this.form.Password,
                  OrganizeName: this.form.OrganizeName,
                  ConfigJSON: this.form.ConfigJSON,
                  IsEnable: this.form.IsEnable ? 1 : 0,
                  LoginCount: this.form.LoginCount,
                  LastLoginDate: this.form.LastLoginDate,
                  CreatePerson: this.form.CreatePerson,
                  CreateDate: this.form.CreateDate,
                  UpdatePerson: this.form.UpdatePerson,
                  UpdateDate: this.form.UpdateDate,
                  RoleName: localStorage.getItem('ai-accountid') ? localStorage.getItem('ai-accountid') : (this.form.OrganizeID[0] === '92c911dc0d4f43798dee9a550d9fade7' ? '2' : '1')
                }
              ]
            }
            // 处理组织机构ID
            if (typeof this.form.OrganizeID === 'object') {
              params.Update[0].OrganizeID = this.form.OrganizeID[this.form.OrganizeID.length - 1] || ''
            }
            // 处理组织机构Code
            this.OrgList.forEach(v => {
              if (params.Update[0].OrganizeID === v.OrganizeID) {
                params.Update[0].OrganizeCode = v.OrganizeCode
              }
            })
            // 处理部门ID
            if (typeof this.form.DepartmentID === 'object') {
              params.Update[0].DepartmentID = this.form.DepartmentID[this.form.DepartmentID.length - 1] || ''
            }
            editUserAPI(params).then(res => {
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
                  OrganizeID: this.form.OrganizeID, // 组织机构ID
                  OrganizeCode: '',
                  DepartmentID: this.form.DepartmentID, // 部门ID
                  UserCode: this.form.UserCode, // 用户编码
                  UserSeq: this.form.UserSeq, // 用户排序
                  UserTel: this.form.UserTel, // 用户电话
                  UserName: this.form.UserName,
                  Description: this.form.Description,
                  Password: this.form.Password,
                  OrganizeName: this.form.OrganizeName,
                  ConfigJSON: this.form.ConfigJSON,
                  IsEnable: this.form.IsEnable ? 1 : 0,
                  LoginCount: this.form.LoginCount,
                  LastLoginDate: this.form.LastLoginDate,
                  CreatePerson: this.form.CreatePerson,
                  CreateDate: this.form.CreateDate,
                  UpdatePerson: this.form.UpdatePerson,
                  UpdateDate: this.form.UpdateDate,
                  RoleName: localStorage.getItem('ai-accountid') ? localStorage.getItem('ai-accountid') : (this.form.OrganizeID[0] === '92c911dc0d4f43798dee9a550d9fade7' ? '2' : '1')
                }
              ]
            }
            // 处理组织机构ID
            if (typeof this.form.OrganizeID === 'object') {
              params.Innsert[0].OrganizeID = this.form.OrganizeID[this.form.OrganizeID.length - 1] || ''
            }
            // 处理组织机构Code
            this.OrgList.forEach(v => {
              if (params.Innsert[0].OrganizeID === v.OrganizeID) {
                params.Innsert[0].OrganizeCode = v.OrganizeCode
              }
            })
            // 处理部门ID
            if (typeof this.form.DepartmentID === 'object') {
              params.Innsert[0].DepartmentID = this.form.DepartmentID[this.form.DepartmentID.length - 1] || ''
            }
            addUserAPI(params).then(res => {
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

