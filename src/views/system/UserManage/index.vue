<template>
  <div class="app-container">
    <el-card class="departmentCard">
      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary" @click="add()">添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item label="组织机构">
            <el-cascader
              ref="elcascader1"
              v-model="OrganizeID"
              style="width: 100%;"
              :options="OrgList"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              clearable
              filterable
              placeholder="请选择或搜索"
              @change="changeOrg"
            />
          </el-form-item>
          <el-form-item label="部门">
            <el-cascader
              ref="elcascader2"
              :key="cascaderKey"
              v-model="DepartmentID"
              style="width: 100%;"
              :options="DepartmentList"
              :props="{ checkStrictly: true, expandTrigger: 'hover' }"
              clearable
              filterable
              placeholder="请选择或搜索"
              @change="changeVal2"
            />
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="name" placeholder="请输入" clearable />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search()">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="reset()">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        ref="table"
        stripe
        :height="tableHeight"
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        highlight-current-row
      >
        <el-table-column prop="UserCode" label="用户账号" align="center" width="120px" />
        <el-table-column prop="UserName" label="用户名称" align="center" width="120px" />
        <el-table-column prop="UserTel" label="手机号" align="center" width="120px" />
        <el-table-column prop="OrganizeName" label="组织机构" align="center" width="200px" />
        <el-table-column prop="DepartmentName" label="部门" align="center" width="200px" />
        <el-table-column prop="Description" label="描述说明" align="center" width="120px" />
        <el-table-column prop="IsEnable" label="是否启用" align="center">
          <template slot-scope="scope">
            <svg-icon v-if="scope.row.IsEnable === 'true' || scope.row.IsEnable === true" icon-class="selectBox" />
            <svg-icon v-else icon-class="noSelectBox" />
          </template>
        </el-table-column>
        <el-table-column prop="LastLoginDate" label="最后登录时间" align="center" width="200px">
          <template slot-scope="scope">
            <span v-if="scope.row.LastLoginDate">
              {{ new Date(scope.row.LastLoginDate) | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="LastLoginDate" label="操作" align="center" width="160px" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="settingRole(scope.row)">设置角色</el-button>
            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange2"
      />
    </el-card>

    <!-- 新增/编辑 dialog form -->
    <el-dialog :visible.sync="dialogEditVisible" :title="dialogEditTitle" :append-to-body="true">
      <edit-form :form="form" :dialog-edit-visible="dialogEditVisible" @closeDialog="closeDialog" />
    </el-dialog>

    <!-- 设置角色 dialog form -->
    <el-dialog :visible.sync="dialogRoleVisible" title="设置角色" :append-to-body="true">
      <role-form :form="form" :keyparams="keyparams" :dialog-role-visible="dialogRoleVisible" @closeDialog="closeDialog" />
    </el-dialog>

  </div>
</template>
<script>
import { getOrgListAPI, GetDepartmentByOrgAPI, getUserListAPI, delUserAPI } from '@/api/system'
import EditForm from './components/editForm'
import RoleForm from './components/roleForm'
export default {
  components: {
    EditForm,
    RoleForm
  },
  data() {
    return {
      cascaderKey: 1,
      OrganizeID: '',
      DepartmentID: '',
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
      staticHeight: innerHeight,
      tableHeight: innerHeight - 330,
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      tableData: [{
        ConfigJSON: '',
        CreateDate: '2021-01-13T10:59:02',
        CreatePerson: '0af7e783c98a49008944ce2ca57f8eaf',
        DepartmentID: '',
        DepartmentName: null,
        Description: '',
        IsEnable: 'true',
        LastLoginDate: '2021-05-07T16:19:40',
        LoginCount: 8,
        OrganizeID: 'b0c203fff18111ea8f4e00163e127e89',
        OrganizeName: '运营中心',
        Password: 'f80920d38468262c0860c0ca3c2a41b9',
        RoleName: '',
        UpdateDate: null,
        UpdatePerson: '',
        UserCode: '体验账号',
        UserID: '9f825a9b9fee4638b624b15aa13a8f5c',
        UserName: '体验账号',
        UserSeq: '',
        UserTel: '19939186789'
      }, {
        ConfigJSON: '',
        CreateDate: '2021-01-13T10:59:02',
        CreatePerson: '0af7e783c98a49008944ce2ca57f8eaf',
        DepartmentID: '',
        DepartmentName: null,
        Description: '',
        IsEnable: 'true',
        LastLoginDate: '2021-05-07T16:19:40',
        LoginCount: 8,
        OrganizeID: 'b0c203fff18111ea8f4e00163e127e89',
        OrganizeName: '运营中心',
        Password: 'f80920d38468262c0860c0ca3c2a41b9',
        RoleName: '',
        UpdateDate: null,
        UpdatePerson: '',
        UserCode: '体验账号1',
        UserID: '9f825a9b9fee4638b624b15aa13a8f5c',
        UserName: '体验账号1',
        UserSeq: '',
        UserTel: '19939186789'
      }, {
        ConfigJSON: '',
        CreateDate: '2021-01-13T10:59:02',
        CreatePerson: '0af7e783c98a49008944ce2ca57f8eaf',
        DepartmentID: '',
        DepartmentName: null,
        Description: '',
        IsEnable: 'true',
        LastLoginDate: '2021-05-07T16:19:40',
        LoginCount: 8,
        OrganizeID: 'b0c203fff18111ea8f4e00163e127e89',
        OrganizeName: '运营中心',
        Password: 'f80920d38468262c0860c0ca3c2a41b9',
        RoleName: '',
        UpdateDate: null,
        UpdatePerson: '',
        UserCode: '体验账号2',
        UserID: '9f825a9b9fee4638b624b15aa13a8f5c',
        UserName: '体验账号2',
        UserSeq: '',
        UserTel: '19939186789'
      }],
      name: '', // 姓名
      currentDepartmentRow: { // 当前选中的部门
        DepartmentID: ''
      },
      dialogEditVisible: false,
      dialogRoleVisible: false,
      dialogEditTitle: '新增用户',
      form: { // 用户表单
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
      },
      roleName: '', // 临时
      userCode: '',
      orgCode: '',
      keyparams: {
        roleName: '', // 临时
        userCode: '',
        orgCode: ''
      },
      parentList: []
    }
  },
  created() {
    this.getOrgList()
    // this.getData()
    this.roleName = localStorage.getItem('ai-rolename')
    this.userCode = localStorage.getItem('ai-usercode')
    this.orgCode = localStorage.getItem('ai-orgcode')
  },
  methods: {
    changeVal1() {
      this.$refs.elcascader1.dropDownVisible = false
    },
    changeVal2() {
      this.$refs.elcascader2.dropDownVisible = false
    },
    // 更改组织ID
    changeOrg() {
      this.changeVal1()
      this.DepartmentID = ''
      let OrganizeID = ''
      if (typeof this.OrganizeID === 'object') {
        OrganizeID = this.OrganizeID[this.OrganizeID.length - 1] || ''
      }
      if (OrganizeID) {
        this.GetDepartmentByOrg(OrganizeID)
      } else {
        this.cascaderKey = this.cascaderKey + 1
        // this.DepartmentList = []
      }
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
    // 获取用户列表
    getData() {
      // const params = {
      //   OrganizeID: this.OrganizeID, // 组织机构ID
      //   OrganizeCode: localStorage['ai-orgcode'],
      //   DepartmentID: this.DepartmentID,
      //   UserID: localStorage['ai-userid'],
      //   UserName: this.name,
      //   index: this.currentPage,
      //   PageCount: this.pageSize
      // }
      // // 处理组织机构ID
      // if (typeof this.OrganizeID === 'object') {
      //   params.OrganizeID = this.OrganizeID[this.OrganizeID.length - 1] || ''
      // }
      // // 处理部门ID
      // if (typeof this.DepartmentID === 'object') {
      //   params.DepartmentID = this.DepartmentID[this.DepartmentID.length - 1] || ''
      // }
      // getUserListAPI(params).then(res => {
      //   if (res.Rows.result === '1') {
      //     this.tableData = res.Data
      //     this.totalSize = res.Data1[0].TotalCount
      //   }
      // })
    },
    // 点击 添加btn
    add() {
      this.form = { // 用户表单
        OrganizeID: '', // 组织机构ID
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
        roleName: this.roleName, // 临时
        userCode: this.userCode,
        orgCode: this.orgCode
      }
      this.dialogEditTitle = '新增用户'
      this.dialogEditVisible = true
    },
    // 点击 编辑btn
    edit(data) {
      this.form = {
        OrganizeID: data.OrganizeID,
        DepartmentID: data.DepartmentID, // 部门ID
        UserID: data.UserID, // 用户ID
        UserCode: data.UserCode, // 用户编码
        UserSeq: data.UserSeq, // 用户排序
        UserTel: data.UserTel, // 用户电话
        UserName: data.UserName,
        Description: data.Description,
        Password: data.Password,
        OrganizeName: data.OrganizeName,
        ConfigJSON: data.ConfigJSON,
        IsEnable: data.IsEnable === 'true',
        LoginCount: data.LoginCount,
        LastLoginDate: data.LastLoginDate,
        CreatePerson: data.CreatePerson,
        CreateDate: data.CreateDate,
        UpdatePerson: data.UpdatePerson,
        UpdateDate: data.UpdateDate
      }
      this.dialogEditVisible = true
      this.dialogEditTitle = '编辑用户'
    },
    // 点击 删除btn
    del(row) {
      this.$confirm('此操作将删除' + row.UserName + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        return
        const params = {
          OrganizeCode: localStorage['ai-orgcode'],
          UserID: localStorage['ai-userid'],
          Delete: [
            {
              UserID: row.UserID
            }
          ]
        }
        delUserAPI(params).then(res => {
          if (res.Rows.result === '1') {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.form.UserID = ''
            this.$refs.table.setCurrentRow()
            this.dialogEditVisible = false
            this.getData()
          } else {
            this.$message({
              message: res.Rows.remark,
              type: 'error'
            })
          }
        }).catch(res => {
          this.$message({
            message: res.Rows.remark,
            type: 'error'
          })
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 点击 设置角色
    settingRole(item) {
      this.form.UserID = item.UserID
      this.dialogRoleVisible = true
    },
    // 点击 取消btn 新增/编辑
    closeDialog() {
      this.dialogEditVisible = false
      this.dialogRoleVisible = false
      this.getData()
    },
    // 查询部门列表
    search() {
      this.currentPage = 1
      this.getData()
    },
    // 重置
    reset() {
      this.name = ''
      this.currentPage = 1
      this.cascaderKey = this.cascaderKey + 1
      this.DepartmentID = ''
      // this.DepartmentList = []
      this.OrganizeID = ''
      this.getData()
    },
    // 点击部门列表，查询用户列表
    handleNodeClick(data) {
      if (data) {
        this.currentDepartmentRow = {
          DepartmentID: data.DepartmentID
        }
      } else {
        this.currentDepartmentRow = {
          DepartmentID: ''
        }
      }
      this.getData()
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getData()
    },
    handleCurrentChange2(val) {
      this.currentPage = val
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container{
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 80px);
  .title{
    font-size: 14px;
    color: #28356C;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .orgCard{
    width: 20%;
    height: 100% !important;
    overflow-y: scroll;
  }
  .departmentCard{
    width: 100%;
    // width: calc(80% - 20px);
  }
}
.handle{
  display: flex;
  justify-content: flex-end;
}
</style>
<style>
.has-gutter tr th {
  background: #e1e6f1 !important;
  color: #767fa2;
}
.el-table {
  color: #28356c;
}
</style>
