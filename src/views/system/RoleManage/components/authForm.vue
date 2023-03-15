<template>
  <div>
    <div class="info">
      <img class="avatar" src="./../../../../assets/avatar.png">
      <span class="text">
        {{ form.RoleName }}
      </span>
    </div>
    <br>
    <el-tree
      ref="tree"
      :data="tableData"
      show-checkbox
      node-key="MenuID"
      :expand-on-click-node="false"
      :default-checked-keys="checkedList"
    >
      <span slot-scope="{ node, data }" class="custom-tree-node">
        <span>{{ data.MenuName }}</span>
      </span>
    </el-tree>
    <br>
    <!-- 保存/取消 -->
    <el-row class="handle">
      <el-col :span="24">
        <div class="handle">
          <el-button type="primary" @click="save">保存</el-button>
          <el-button type="" @click="closeDialog">取消</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { getMenuListAPI, AddRoleMenuAPI } from '@/api/system'
import { uniqueArr } from '../../../../utils'
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
    dialogAuthFormVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkedList: [],
      tableData: []
    }
  },
  watch: {
    dialogAuthFormVisible() {
      if (this.dialogAuthFormVisible) {
        this.getData()
      }
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取菜单列表
    getData() {
      const params = {
        OrganizeCode: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid'],
        RoleID: this.form.RoleID
      }
      getMenuListAPI(params).then(res => {
        const data = res.Data
        const list = []
        const getList = (arr) => {
          arr.forEach(v => {
            if (v.children && v.children !== 0) {
              getList(v.children)
            }
            if (v.IsChecked === '1') {
              // children的选择都要是 '1'才可以push
              if (v.children && v.children !== 0) { // 从内到外的遍历
                let canPush = true
                v.children.forEach(cv => {
                  if (!cv.IsChecked) {
                    canPush = false
                  }
                })
                if (canPush) {
                  list.push(v.MenuID)
                } else { // 防止第一级被选中了之后，影响第三级的逻辑
                  v.IsChecked = null
                }
              } else {
                list.push(v.MenuID)
              }
            }
          })
        }
        getList(data)
        this.tableData = data
        this.checkedList = list
      })
    },
    // 当父级被选中的时候，子集应该全部被选中
    checkChange(data, checked, indeterminate) {
      if (data.children && data.children.length !== 0 && checked) {
        const childrenSelectList = []
        const changeList = (arr) => {
          arr.forEach(v => {
            childrenSelectList.push(v.MenuID)
            if (v.children && v.children.length !== 0) {
              changeList(v.children)
            }
          })
        }
        changeList(data.children)

        // 获取当前选中的keys
        const selectKeysList = this.$refs.tree.getCheckedKeys()
        this.$refs.tree.setCheckedKeys(uniqueArr(selectKeysList.concat(childrenSelectList)))
      }
    },
    // 保存
    save() {
      const checkedList = this.$refs.tree.getCheckedNodes()
      const checkedHalfList = this.$refs.tree.getHalfCheckedNodes()
      const list = []
      checkedList.map(v => {
        list.push({
          MenuID: v.MenuID
        })
      })
      if (checkedHalfList.length !== 0) {
        checkedHalfList.map(v => {
          list.push({
            MenuID: v.MenuID
          })
        })
      }
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
        MenuIDList: list
      }
      AddRoleMenuAPI(params).then(res => {
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
</style>
<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>

<style lang="scss" scoped>
.handle{
  display: flex;
  justify-content: flex-end;
}
</style>
