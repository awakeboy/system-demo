<template>
  <div class="app-container">
    <el-card class="orgCard">
      <div class="title">组织机构</div>
      <el-tree
        :data="treeData"
        node-key="OrganizeID"
        default-expand-all
        highlight-current
        :expand-on-click-node="false"
        @node-click="handleNodeClick"
      >
        <span slot-scope="{ node, data }" class="custom-tree-node">
          <svg-icon v-if="data.children && data.children.length !== 0" icon-class="folder" />
          <svg-icon v-else icon-class="file" />
          <span :title=" data.OrganizeName">{{ data.OrganizeName }}</span>
        </span>
      </el-tree>
    </el-card>
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
          <el-form-item label="部门名称">
            <el-input v-model="name" placeholder="请输入部门名称" clearable />
          </el-form-item>
          <el-form-item label="部门编码">
            <el-input v-model="code" placeholder="请输入部门编码" clearable />
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
        stripe
        :height="tableHeight"
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="DepartmentID"
        default-expand-all
        highlight-current-row
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        @current-change="handleCurrentChange"
      >
        <el-table-column prop="DepartmentName" label="部门名称" align="left">
          <template slot-scope="scope">
            <svg-icon v-if="scope.row.children && scope.row.children.length !== 0" icon-class="folder" />
            <svg-icon v-else icon-class="file" />
            <span>{{ scope.row.DepartmentName }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="DepartmenCode" label="部门编码" align="center" />

        <el-table-column prop="ParentID" label="上级部门" align="center">
          <template slot-scope="scope">
            {{ parentNameFilters(scope.row.ParentID) }}
          </template>
        </el-table-column>

        <el-table-column prop="Description" label="描述说明" align="center" />

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
      <edit-form :form="form" :form-parent-list="formParentList" :dialog-edit-visible="dialogEditVisible" @closeDialog="closeDialog" />
    </el-dialog>

  </div>
</template>
<script>
import { getOrgListAPI, getDepartmentListAPI, delDepartmentAPI } from '@/api/system'
import EditForm from './components/editForm'
export default {
  components: {
    EditForm
  },
  data() {
    return {
      tableHeight: innerHeight - 300,
      currentPage: 1,
      pageSize: 500,
      treeData: [
        {
          OrganizeName: '企业1'
        }, {
          OrganizeName: '企业1'
        }, {
          OrganizeName: '企业1'
        }, {
          OrganizeName: '企业1'
        }, {
          OrganizeName: '企业1'
        }
      ],
      tableData: [
        {
          DepartmentName: '部门1',
          DepartmenCode: 'jd',
          ParentID: '无',
          Description: ''
        }, {
          DepartmentName: '部门1',
          DepartmenCode: 'jd',
          ParentID: '无',
          Description: ''
        }, {
          DepartmentName: '部门1',
          DepartmenCode: 'jd',
          ParentID: '无',
          Description: ''
        }
      ],
      name: '', // 部门名称
      code: '', // 部门编码
      currentOrgRow: { // 当前选中组织
        OrganizeCode: '',
        OrganizeID: ''
      },
      dialogEditVisible: false,
      dialogEditTitle: '新增部门',
      form: { // 部门表单
        DepartmentID: '', // 部门ID
        DepartmentName: '', // 部门名称
        DepartmenCode: '', // 部门编码
        ParentID: '', // 上级部门
        Description: '', // 描述
        OrganizeCode: '', // 组织编码
        OrganizeID: '' // 组织ID
      },
      formParentList: [] // 表单的父级列表
    }
  },
  created() {
    // this.getTreeData()
  },
  methods: {
    // 获取组织结构列表
    getTreeData() {
      const params = {
        OrganizeName: '', // 名称
        OrganizeCode: '', // 编码
        OrganizeType: '', // 类型
        OrganizeCode1: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid']
      }
      getOrgListAPI(params).then(res => {
        this.treeData = res.Data
        this.getDepartmentList()
      })
    },
    // 获取部门列表
    getDepartmentList() {
      const params = {
        UserID: localStorage['ai-userid'],
        OrganizeCode: this.currentOrgRow.OrganizeCode,
        OrganizeID: this.currentOrgRow.OrganizeID,
        DepartmenCode: this.code, // 部门编码
        DepartmentName: this.name, // 部门名字
        index: this.currentPage,
        PageCount: this.pageSize
      }
      getDepartmentListAPI(params).then(res => {
        if (res.Rows.result === '1') {
          const data = res.Data
          const data2 = res.Data
          this.tableData = data
          // 递归父级列表 && 表单选择的父级列表
          const list = []
          const changeList = (arr) => {
            arr.forEach(v => {
              if (v.children && v.children.length !== 0) {
                changeList(v.children)
              } else {
                delete v.children
              }
              list.push({
                label: v.DepartmentName,
                value: v.DepartmenCode
              })
              v.label = v.DepartmentName
              v.value = v.DepartmenCode
            })
          }
          changeList(data2)
          this.formParentList = data2
        }
      })
    },
    // 点击 添加btn
    add() {
      if (!this.currentOrgRow.OrganizeCode) {
        this.$message({
          message: '请选择组织机构',
          type: 'warning'
        })
        return
      }
      this.form = { // 部门表单
        DepartmentID: '', // 部门ID
        DepartmentName: '', // 部门名称
        DepartmenCode: '', // 部门编码
        ParentID: '', // 上级部门
        Description: '', // 描述
        OrganizeCode: this.currentOrgRow.OrganizeCode, // 组织编码
        OrganizeID: this.currentOrgRow.OrganizeID // 组织ID
      }
      this.dialogEditTitle = '新增部门'
      this.dialogEditVisible = true
    },
    // 点击 编辑btn
    edit(row) {
      this.form = {
        DepartmentID: row.DepartmentID, // 部门ID
        DepartmentName: row.DepartmentName, // 部门名称
        DepartmenCode: row.DepartmenCode, // 部门编码
        ParentID: row.ParentID, // 上级部门
        Description: row.Description, // 描述
        OrganizeCode: row.OrganizeCode, // 组织编码
        OrganizeID: row.OrganizeID // 组织ID
      }
      this.dialogEditVisible = true
      this.dialogEditTitle = '编辑部门'
    },
    // 点击 删除btn
    del(row) {
      this.$confirm('此操作将删除' + row.DepartmentName + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        const params = {
          OrganizeCode: localStorage['ai-orgcode'],
          UserID: localStorage['ai-userid'],
          Delete: [
            {
              DepartmentID: row.DepartmentID
            }
          ]
        }
        delDepartmentAPI(params).then(res => {
          if (res.Rows.result === '1') {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.dialogEditVisible = false
            this.getDepartmentList()
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
    // 查询部门列表
    search() {
      this.getDepartmentList()
    },
    // 重置
    reset() {
      this.name = ''
      this.code = ''
      this.getDepartmentList()
    },
    // 点击组织结构列表，查询部门列表
    handleNodeClick(data) {
      this.currentOrgRow = data
      this.getDepartmentList()
    },
    // 点击部门列表
    handleCurrentChange(data) {
      if (data) {
        this.form = {
          DepartmentID: data.DepartmentID, // 部门ID
          DepartmentName: data.DepartmentName, // 部门名称
          DepartmenCode: data.DepartmenCode, // 部门编码
          ParentID: data.ParentID, // 上级部门
          Description: data.Description, // 描述
          OrganizeCode: data.OrganizeCode, // 组织编码
          OrganizeID: data.OrganizeID // 组织ID
        }
      } else {
        this.form = { // 部门表单
          DepartmentID: '', // 部门ID
          DepartmentName: '', // 部门名称
          DepartmenCode: '', // 部门编码
          ParentID: '', // 上级部门
          Description: '', // 描述
          OrganizeCode: '', // 组织编码
          OrganizeID: '' // 组织ID
        }
      }
    },
    parentNameFilters(value) {
      let nameStr = '无'
      for (let i = 0; i < this.tableData.length; i++) {
        if (value === this.tableData[i].DepartmentID) {
          nameStr = this.tableData[i].DepartmentName
          break
        }
      }
      return nameStr
    },
    // 关闭弹窗，刷新列表
    closeDialog() {
      this.dialogEditVisible = false
      this.getDepartmentList()
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container{
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 80px);
  .title{
    font-size: 14px;
    color: #28356C;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .orgCard{
    width: 20%;
    min-height: 100%;
  }
  .departmentCard{
    width: calc(80% - 20px);
  }
}
.handle{
  display: flex;
  justify-content: flex-end;
}
</style>
