<template>
  <div>
    <div class="info">
      <img class="avatar" src="./../../../../assets/avatar.png">
      <span class="text">
        {{ form.RoleName }}
      </span>
    </div>
    <br>
    <!-- 成员列表 -->
    <el-row class="roleUser">
      <el-col :span="20" :offset="2">
        <el-checkbox
          v-model="checkAll"
          @change="changeCheckAll"
        >全选</el-checkbox>
      </el-col>
      <el-col
        v-for="(item, index) in userAllList"
        :key="index"
        class="item"
        :span="8"
        :offset="2"
      >
        <el-checkbox v-model="item.checked">
          <span class="userName">
            {{ item.UserName }}
          </span>
        </el-checkbox>
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
import {
  getUserAllListAPI,
  getRoleUserListAPI,
  addRoleUserAPI
} from '@/api/system'
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
    },
    dialogUserFormVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      userAllList: [], // 所有人员
      innerVisible: false,
      checkAll: false // 全选
    }
  },
  watch: {
    dialogUserFormVisible() {
      if (this.dialogUserFormVisible) {
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
      const params = {
        OrganizeCode: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid'],
        RoleID: this.form.RoleID,
        OrgCode: ''
      }
      getUserAllListAPI(params).then(res => {
        const data = res.Data
        this.userAllList = data
        this.getRoleUser()
      })
    },
    // 获取已添加人员列表
    getRoleUser() {
      const params = {
        OrganizeCode: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid'],
        RoleID: this.form.RoleID
      }
      getRoleUserListAPI(params).then(res => {
        const data = res.Data.Data
        const list = this.userAllList
        if (res.Data.Data) {
          list.forEach(v => {
            data.forEach(cv => {
              if (cv.MemberName === v.UserName) {
                v.checked = true
              }
            })
          })
          // 全选判断
          if (data.length === this.userAllList.length) {
            this.checkAll = true
          }
        }
        this.userAllList = list
      })
    },
    // 改变 新增dialog中的全选
    changeCheckAll() {
      this.userAllList.forEach(v => {
        v.checked = this.checkAll
      })
    },
    // 选择单个用户，判断全选按钮是否需要改变状态
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
      const userIdList = []
      arr.map(v => {
        userIdList.push({
          UserID: v.UserID
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
        RoleID: this.form.RoleID,
        Innert: userIdList
      }
      addRoleUserAPI(params)
        .then(res => {
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
        })
        .catch(res => {
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
  .text {
    margin-left: 12px;
  }
}
.handle {
  display: flex;
  justify-content: flex-end;
}
.userName {
  width: 300px;
  display: inline-flex;
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
}
</style>
