<template>
  <div class="app-container">
    <el-card>
      <!-- 顶部操作栏 -->
      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary" @click="add()">添加</el-button>
          </el-form-item>
        </el-form>
      </div>

      <el-table
        ref="table"
        :height="tableHeight"
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="MenuID"
        default-expand-all
        highlight-current-row
        stripe
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="MenuName" label="菜单名称" align="left">
          <template slot-scope="scope">
            <svg-icon v-if="scope.row.children && scope.row.children.length !== 0" icon-class="folder" />
            <svg-icon v-else icon-class="file" />
            <span>{{ scope.row.MenuName }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="MenuCode" label="编码" align="center" />

        <el-table-column prop="ParentID" label="上级菜单" align="center">
          <template slot-scope="scope">
            {{ idToName(scope.row.ParentID) }}
          </template>
        </el-table-column>

        <el-table-column prop="IsEnable" label="是否启用" align="center">
          <template slot-scope="scope">
            <svg-icon v-if="scope.row.IsEnable === 1" icon-class="selectBox" />
            <svg-icon v-else icon-class="noSelectBox" />
          </template>
        </el-table-column>

        <el-table-column prop="MenuSeq" label="排序" align="center" />

        <el-table-column label="操作" align="center" fixed="right" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="del(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 新增/编辑 dialog form -->
    <el-dialog :visible.sync="dialogEditVisible" :title="dialogEditTitle" :append-to-body="true">
      <edit-form :form="currentRow" :dialog-edit-visible="dialogEditVisible" @closeDialog="closeDialog" />
    </el-dialog>
  </div>
</template>
<script>
import { getInfoAPI } from '@/api/user'
import { delMenuAPI } from '@/api/system'
import EditForm from './components/editForm'
export default {
  components: {
    EditForm
  },
  data() {
    return {
      tableHeight: innerHeight - 230,
      tableData: [{
        CreateDate: null,
        CreatePerson: null,
        Description: null,
        IconClass: '',
        IconURL: '',
        IsChecked: null,
        IsDelete: null,
        IsEnable: 1,
        IsMain: 0,
        IsVisible: 1,
        MenuCode: 'XTSZ',
        MenuID: '77c2d56f297d4628affe58d5760fe0ca',
        MenuName: '系统管理',
        MenuSeq: '1',
        ParentID: '0',
        URL: '',
        UpdateDate: null,
        UpdatePerson: null,
        children: [{
          CreateDate: null,
          CreatePerson: null,
          Description: null,
          IconClass: '',
          IconURL: '',
          IsChecked: null,
          IsDelete: null,
          IsEnable: 1,
          IsMain: 0,
          IsVisible: 1,
          MenuCode: 'CDDH',
          MenuID: 'e31de345f2024b42a13cf21bea1271c7 ',
          MenuName: '菜单管理',
          MenuSeq: '1',
          ParentID: '77c2d56f297d4628affe58d5760fe0ca',
          URL: '',
          UpdateDate: null,
          UpdatePerson: null,
          children: []
        }, {
          CreateDate: null,
          CreatePerson: null,
          Description: null,
          IconClass: '',
          IconURL: '',
          IsChecked: null,
          IsDelete: null,
          IsEnable: 1,
          IsMain: 0,
          IsVisible: 1,
          MenuCode: 'JSGL',
          MenuID: 'e31de345f2024b42a13cf21bea1271c8 ',
          MenuName: '角色管理',
          MenuSeq: '2',
          ParentID: '77c2d56f297d4628affe58d5760fe0ca',
          URL: '',
          UpdateDate: null,
          UpdatePerson: null,
          children: []
        }, {
          CreateDate: null,
          CreatePerson: null,
          Description: null,
          IconClass: '',
          IconURL: '',
          IsChecked: null,
          IsDelete: null,
          IsEnable: 1,
          IsMain: 0,
          IsVisible: 1,
          MenuCode: 'YHGL',
          MenuID: 'e31de345f2024b42a13cf21bea1271c9 ',
          MenuName: '用户管理',
          MenuSeq: '3',
          ParentID: '77c2d56f297d4628affe58d5760fe0ca',
          URL: '',
          UpdateDate: null,
          UpdatePerson: null,
          children: []
        }, {
          CreateDate: null,
          CreatePerson: null,
          Description: null,
          IconClass: '',
          IconURL: '',
          IsChecked: null,
          IsDelete: null,
          IsEnable: 1,
          IsMain: 0,
          IsVisible: 1,
          MenuCode: 'SJZD',
          MenuID: 'e31de345f2024b42a13cf21bea1271e1 ',
          MenuName: '数据字典',
          MenuSeq: '4',
          ParentID: '77c2d56f297d4628affe58d5760fe0ca',
          URL: '',
          UpdateDate: null,
          UpdatePerson: null,
          children: []
        }, {
          CreateDate: null,
          CreatePerson: null,
          Description: null,
          IconClass: '',
          IconURL: '',
          IsChecked: null,
          IsDelete: null,
          IsEnable: 1,
          IsMain: 0,
          IsVisible: 1,
          MenuCode: 'RZGL',
          MenuID: 'e31de345f2024b42a13cf21bea1271c3 ',
          MenuName: '日志管理',
          MenuSeq: '5',
          ParentID: '77c2d56f297d4628affe58d5760fe0ca',
          URL: '',
          UpdateDate: null,
          UpdatePerson: null,
          children: []
        }]
      }, {
        CreateDate: null,
        CreatePerson: null,
        Description: null,
        IconClass: '',
        IconURL: '',
        IsChecked: null,
        IsDelete: null,
        IsEnable: 1,
        IsMain: 0,
        IsVisible: 1,
        MenuCode: 'TXGDGL',
        MenuID: '77c2d56f297d4628affe58d5760fe0cb',
        MenuName: '通信管道管理',
        MenuSeq: '2',
        ParentID: '0',
        URL: '',
        UpdateDate: null,
        UpdatePerson: null,
        children: [{
          CreateDate: null,
          CreatePerson: null,
          Description: null,
          IconClass: '',
          IconURL: '',
          IsChecked: null,
          IsDelete: null,
          IsEnable: 1,
          IsMain: 0,
          IsVisible: 1,
          MenuCode: 'TXGDXM',
          MenuID: 'e31de345f2024b42a13cf21bea1271c5 ',
          MenuName: '通行管道项目',
          MenuSeq: '1',
          ParentID: '77c2d56f297d4628affe58d5760fe0cb',
          URL: '',
          UpdateDate: null,
          UpdatePerson: null,
          children: []
        }]
      }], // 菜单列表
      ParentIDList: [], // 父级菜单列表
      dialogEditVisible: false, // 新增/编辑的form
      dialogEditTitle: '新增主站后台菜单', // 新增/编辑的title
      currentRow: { // 当前选中的行
        MenuID: '', // 菜单ID
        MenuName: '',
        ParentID: '', // 上级菜单的编码
        MenuCode: '',
        URL: '',
        IsVisible: true, // 是否可见，0可见
        IsEnable: true, // 是否启用，0启用
        MenuSeq: '' // 序号
      }
    }
  },
  created() {
    // this.getData()
  },
  methods: {
    // 获取菜单信息
    getData() {
      // const params = {
      //   OrganizeCode: localStorage['ai-orgcode'],
      //   UserID: localStorage['ai-userid']
      // }
      // getInfoAPI(params).then(res => {
      //   const data = res.Data
      //   this.tableData = data
      //   // 递归父级菜单列表
      //   const list = []
      //   const changeList = (arr) => {
      //     arr.forEach(v => {
      //       if (v.children && v.children.length !== 0) {
      //         changeList(v.children)
      //       }
      //       list.push({
      //         lable: v.MenuName,
      //         value: v.MenuID
      //       })
      //     })
      //   }
      //   changeList(data)
      //   this.ParentIDList = list
      // })
    },
    // 将菜单ID转化成名称
    idToName(id) {
      if (!id) {
        return ''
      }
      let name = ''
      for (let i = 0; i < this.ParentIDList.length; i++) {
        if (this.ParentIDList[i].value === id) {
          name = this.ParentIDList[i].lable
          break
        }
      }
      return name
    },
    // 添加
    add() {
      this.currentRow = { // 当前选中的行
        MenuID: '', // 菜单ID
        MenuName: '',
        ParentID: '', // 上级菜单的编码
        MenuCode: '',
        URL: '',
        IsVisible: true, // 是否可见，0可见
        IsEnable: true, // 是否启用，0启用
        MenuSeq: '' // 序号 默认1
      }
      this.dialogEditTitle = '新增主站后台菜单'
      this.dialogEditVisible = true
    },
    // 编辑
    edit(row) {
      this.currentRow = {
        MenuID: row.MenuID, // 菜单ID
        MenuName: row.MenuName,
        ParentID: row.ParentID, // 上级菜单的编码
        MenuCode: row.MenuCode,
        URL: row.URL,
        IsVisible: row.IsVisible === 1, // 是否可见，1可见
        IsEnable: row.IsEnable === 1, // 是否启用，1启用
        MenuSeq: row.MenuSeq // 序号
      }
      this.dialogEditTitle = '编辑主站后台菜单'
      this.dialogEditVisible = true
    },
    // 删除
    del(row) {
      this.$confirm('此操作将删除' + row.MenuName + ', 是否继续?', '提示', {
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
              MenuID: row.MenuID
            }
          ]
        }
        delMenuAPI(params).then(res => {
          if (res.Rows.result === '1') {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
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
    // 关闭 新增/编辑 dialog
    closeDialog() {
      this.dialogEditVisible = false
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container{
  .title{
    font-size: 18px;
    color: #28356C;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
<style>
.has-gutter tr th {
  background: #E1E6F1 !important;
  color: #767FA2;
}
.el-table{
  color: #28356C;
}
</style>
