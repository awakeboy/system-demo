<template>
  <div class="app-container">
    <el-card>
      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary" @click="add()">添加</el-button>
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
        <el-table-column prop="RoleName" label="角色名称" align="center" />
        <el-table-column prop="RoleCode" label="角色编码" align="center" />
        <el-table-column prop="Description" label="描述" align="center" />
        <el-table-column
          prop="RoleName"
          label="操作"
          align="center"
          width="250px"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="setPower(scope.row)"
            >设置权限</el-button>
            <el-button
              type="text"
              size="small"
              @click="setRole(scope.row)"
            >设置人员</el-button>
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 新增/编辑 dialog form -->
    <el-dialog :visible.sync="dialogEditVisible" :title="dialogEditTitle" :append-to-body="true">
      <role-form :form="form" @closeDialog="closeDialog" />
    </el-dialog>
    <!-- 设置权限dialog -->
    <el-dialog
      :visible.sync="dialogAuthFormVisible"
      title="设置权限"
      :append-to-body="true"
    >
      <auth-form
        :form="form"
        :dialog-auth-form-visible="dialogAuthFormVisible"
        @closeDialog="closeDialog"
      />
    </el-dialog>

    <!-- 设置人员dialog -->
    <el-dialog :visible.sync="dialogUserFormVisible" title="设置人员" :append-to-body="true">
      <user-form
        :form="form"
        :dialog-user-form-visible="dialogUserFormVisible"

        @closeDialog="closeDialog"
      />
    </el-dialog>
  </div>
</template>
<script>
import { getRoleListAPI, delRoleAPI } from '@/api/system'
import RoleForm from './components/roleForm' // 设置角色
import UserForm from './components/userForm' // 设置人员
import AuthForm from './components/authForm' // 设置权限
export default {
  components: {
    RoleForm,
    UserForm,
    AuthForm
  },
  data() {
    return {
      tableHeight: innerHeight - 230,
      tableData: [{
        CreateDate: '2020-04-22T16:19:49',
        CreatePerson: '0af7e783c98a49008944ce2ca57f8eaf',
        Description: '各机构管理员',
        RoleCode: 'gly',
        RoleID: '0879f605847211ea8f4e00163e127e89',
        RoleName: '机构管理员',
        RoleSeq: '1',
        UpdateDate: '2020-06-11T14:12:54',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }, {
        CreateDate: null,
        CreatePerson: null,
        Description: '服务器版权限-勿删',
        RoleCode: 'sjry',
        RoleID: '3f37e1989fba11eaa7c000163e0b5c5d',
        RoleName: '设计人员',
        RoleSeq: '',
        UpdateDate: '2020-05-27T09:47:35',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }, {
        CreateDate: '2020-09-08T11:17:08',
        CreatePerson: '0af7e783c98a49008944ce2ca57f8eaf',
        Description: '',
        RoleCode: 'GLHY',
        RoleID: 'c755fef1f18111ea8f4e00163e127e89',
        RoleName: '个人会员',
        RoleSeq: '',
        UpdateDate: null,
        UpdatePerson: null
      }],
      dialogEditVisible: false,
      dialogEditTitle: '新增角色',
      form: {
        RoleID: '', // 角色ID
        RoleName: '', // 角色名称
        RoleCode: '', // 角色编码
        RoleSeq: '', // 排序
        Description: '' // 描述
      },
      dialogUserFormVisible: false,
      dialogAuthFormVisible: false
    }
  },
  created() {
    // this.getData()
  },
  methods: {
    // 获取菜单列表数据
    getData() {
      // const params = {
      //   OrganizeCode: localStorage['ai-orgcode'],
      //   UserID: localStorage['ai-userid']
      // }
      // getRoleListAPI(params).then(res => {
      //   this.tableData = res.Data.Data
      // })
    },
    // 点击 新增
    add() {
      this.form = {
        RoleID: '', // 角色ID
        RoleName: '', // 角色名称
        RoleCode: '', // 角色编码
        RoleSeq: '', // 排序
        Description: '' // 描述
      }
      this.dialogEditVisible = true
      this.dialogEditTitle = '新增角色'
    },
    // 点击 编辑
    edit(row) {
      this.form = {
        RoleID: row.RoleID, // 角色ID
        RoleName: row.RoleName, // 角色名称
        RoleCode: row.RoleCode, // 角色编码
        RoleSeq: row.RoleSeq, // 排序
        Description: row.Description // 描述
      }
      this.dialogEditVisible = true
      this.dialogEditTitle = '编辑角色'
    },
    // 点击 删除
    del(row) {
      this.$confirm('此操作将删除' + row.RoleName + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
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
                RoleID: row.RoleID
              }
            ]
          }
          delRoleAPI(params)
            .then(res => {
              if (res.Rows.result === '1') {
                this.$message({
                  message: '删除成功',
                  type: 'success'
                })
                this.dialogEditVisible = false
                this.getData()
              } else {
                this.$message({
                  message: res.Rows.remark,
                  type: 'error'
                })
              }
            })
            .catch(res => {
              this.$message({
                message: res.Rows.remark,
                type: 'error'
              })
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 点击 设置权限
    setPower(item) {
      this.form = item
      this.dialogAuthFormVisible = true
    },
    // 点击 设置人员
    setRole(item) {
      this.form = item
      this.dialogUserFormVisible = true
    },
    // 点击 取消btn
    closeDialog() {
      this.dialogUserFormVisible = false
      this.dialogEditVisible = false
      this.dialogAuthFormVisible = false
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  .title {
    font-size: 18px;
    color: #28356c;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
.handle {
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
