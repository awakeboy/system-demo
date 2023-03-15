<template>
  <div>
    <div class="info">
      <img class="avatar" src="./../../../../assets/avatar.png">
      <span class="text">
        {{ form.UserName }}
        &nbsp;&nbsp;&nbsp;&nbsp;
        {{ form.Description }}
      </span>
    </div>
    <br>
    <!-- 成员列表 -->
    <el-row class="roleUser">
      <el-col :span="20" :offset="2">
        <el-checkbox v-model="checkAll" @change="changeCheckAll">全选</el-checkbox>
      </el-col>
      <el-col v-for="(item, index) in userAllList" :key="index" class="item" :span="8" :offset="2">
        <el-checkbox v-model="item.checked" @change="changeCheck">{{ item.RoleName }}</el-checkbox>
      </el-col>
    </el-row>
    <br>
    <span slot="footer" class="handle">
      <el-button @click="closeDialog()">取 消</el-button>
      <el-button type="primary" @click="addUser()">确 定</el-button>
    </span>
  </div>
</template>
<script>
import { GetUserRoleAPI, AddUserRoleAPI } from '@/api/system'
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {
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
          UpdateDate: ''
        }
      }
    },
    dialogRoleVisible: {
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data() {
    return {
      userAllList: [{
        Checked: 'false',
        RoleCode: 'gly',
        RoleID: '0879f605847211ea8f4e00163e127e89',
        RoleName: '机构管理员',
        UserID: null
      }, {
        Checked: 'true',
        RoleCode: 'sjry',
        RoleID: '3f37e1989fba11eaa7c000163e0b5c5d',
        RoleName: '设计人员',
        UserID: '9f825a9b9fee4638b624b15aa13a8f5c'
      }], // 所有人员
      innerVisible: false,
      checkAll: false // 全选
    }
  },
  watch: {
    dialogRoleVisible() {
      if (this.dialogRoleVisible) {
        this.getUserAllData()
      }
    }
  },
  created() {
    this.getUserAllData()
  },
  methods: {
    // 获取所有人员
    getUserAllData() {
      // const params = {
      //   OrganizeCode: localStorage['ai-orgcode'],
      //   UserID: this.form.UserID
      // }
      // GetUserRoleAPI(params).then(res => {
      //   const data = res.Data
      //   data.forEach(v => {
      //     if (v.Checked === 'true') {
      //       v.checked = true
      //     }
      //   })
      //   this.userAllList = data
      // })
    },
    // 改变 新增dialog中的全选
    changeCheckAll() {
      this.userAllList.forEach(v => {
        v.checked = this.checkAll
      })
    },
    // 选择单个用户
    changeCheck() {
      const arr = this.userAllList.filter(v => {
        return v.checked === true
      })
      if (arr.length === this.userAllList.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    },
    // 添加人员
    addUser() {
      // 筛选出选中的用户
      const arr = this.userAllList.filter(v => {
        return v.checked === true
      })
      const roleIdList = []
      arr.map(v => {
        roleIdList.push({
          RoleID: v.RoleID
        })
      })
      this.$message({
        message: '编辑成功',
        type: 'success'
      })
      this.$emit('closeDialog')
      return
      const params = {
        OrganizeCode: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid'],
        AddUserID: this.form.UserID,
        Insert: roleIdList
      }
      AddUserRoleAPI(params).then(res => {
        if (res.Rows.result === '1') {
          this.$message({
            message: '编辑成功',
            type: 'success'
          })
          this.$emit('closeDialog')
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
    },
    closeDialog() {
      this.$emit('closeDialog')
    }
  }
}
</script>
<style lang="scss" scoped>
.roleUser {
  .item {
    margin-top: 10px;
  }
}
.info {
  display: flex;
  align-items: center;
  .avatar {
    width: 28px;
    height: 28px;
    display: block;
  }
  .text{
    margin-left: 12px;
  }
}
.handle {
  display: flex;
  justify-content: flex-end;
}
</style>
