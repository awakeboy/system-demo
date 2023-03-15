<template>
  <div class="app-container">
    <el-card class="orgCard">
      <div class="title">字典类别</div>
      <el-button type="primary" @click="dialogTypeVisible = true">类别管理</el-button>
      <br>
      <br>
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
          <span :title="data.CodeTypeName">{{ data.CodeTypeName }}</span>
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
          <el-form-item label="编码">
            <el-input v-model="code" placeholder="请输入" clearable />
          </el-form-item>
          <el-form-item label="文本">
            <el-input v-model="text" placeholder="请输入" clearable />
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
        :data="tableData"
        :height="tableHeight"
        style="width: 100%;margin-bottom: 20px;"
        row-key="DepartmentID"
        default-expand-all
        highlight-current-row
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        @current-change="handleCurrentCodeChange"
      >
        <el-table-column prop="Value" label="编码" align="center" />
        <el-table-column prop="Text" label="文本" align="center" width="200px" />
        <el-table-column prop="ParentCode" label="上级编号" align="center" />
        <el-table-column prop="Description" label="描述说明" align="center" />
        <el-table-column prop="IsEnable" label="是否启用" align="center">
          <template slot-scope="scope">
            <svg-icon
              v-if="scope.row.IsEnable === 'true' || scope.row.IsEnable === true"
              icon-class="selectBox"
            />
            <svg-icon v-else icon-class="noSelectBox" />
          </template>
        </el-table-column>
        <el-table-column prop="IsDefault" label="是否默认" align="center">
          <template slot-scope="scope">
            <svg-icon
              v-if="scope.row.IsDefault === 'true' || scope.row.IsDefault === true"
              icon-class="selectBox"
            />
            <svg-icon v-else icon-class="noSelectBox" />
          </template>
        </el-table-column>
        <el-table-column prop="Seq" label="排序" />

        <el-table-column label="操作" align="center" fixed="right" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="del(scope.row)">删除</el-button>
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
      />
    </el-card>

    <!-- 新增/编辑 dialog form -->
    <el-dialog :visible.sync="dialogEditVisible" :title="dialogEditTitle" :append-to-body="true">
      <edit-form :form="form" @closeDialog="closeDialog" />
    </el-dialog>

    <!-- 字典类别 dialog form -->
    <el-dialog :visible.sync="dialogTypeVisible" title="字典类别" :append-to-body="true">
      <type-form @closeDialog="closeDialog" @refreshTypeList="refreshTypeList" />
    </el-dialog>

  </div>
</template>
<script>
import { getCodeTypeListAPI, getCodeListAPI, delCodeAPI } from '@/api/system'
import EditForm from './components/editForm'
import TypeForm from './components/typeForm'
export default {
  name: 'CodeManage', // 数据字典
  components: {
    EditForm,
    TypeForm
  },
  data() {
    return {
      tableHeight: innerHeight - 370,
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      treeData: [{
        CodeType: 'ZJGLX',
        CodeTypeID: '0481b09a709911e98f4e00163e127e89',
        CodeTypeName: '类型1',
        CreateDate: null,
        CreatePerson: null,
        Description: '',
        IsDelete: null,
        Seq: 1,
        UpdateDate: '2020-06-01T16:35:08',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }, {
        CodeType: 'JMLX',
        CodeTypeID: '2585d540828311e98f4e00163e127e89',
        CodeTypeName: '类型2',
        CreateDate: null,
        CreatePerson: null,
        Description: '',
        IsDelete: null,
        Seq: 1,
        UpdateDate: '2020-06-01T16:35:08',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }, {
        CodeType: 'lb',
        CodeTypeID: '0d65220985d511ea8f4e00163e127e89',
        CodeTypeName: '类型3',
        CreateDate: null,
        CreatePerson: null,
        Description: '',
        IsDelete: null,
        Seq: 1,
        UpdateDate: '2020-06-01T16:35:08',
        UpdatePerson: '0af7e783c98a49008944ce2ca57f8eaf'
      }],
      tableData: [{
        CodeID: '19803382709911e98f4e00163e127e89',
        CodeTypeID: '0481b09a709911e98f4e00163e127e89',
        CodeTypeName: '',
        CreateDate: '2019-05-07T15:24:07',
        CreatePerson: 'admin',
        Description: '',
        IsDefault: 'true',
        IsEnable: 'true',
        ParentCode: '',
        Seq: 1,
        Text: '设备1',
        UpdateDate: '2019-05-07T15:24:07',
        UpdatePerson: 'admin'
      }, {
        CodeID: '558c59c2709911e98f4e00163e127e89',
        CodeTypeID: '0481b09a709911e98f4e00163e127e89',
        CodeTypeName: '',
        CreateDate: '2019-05-07T15:24:07',
        CreatePerson: 'admin',
        Description: '',
        IsDefault: 'true',
        IsEnable: 'true',
        ParentCode: '',
        Seq: 1,
        Text: '设备2',
        UpdateDate: '2019-05-07T15:24:07',
        UpdatePerson: 'admin'
      }, {
        CodeID: '34b34848709911e98f4e00163e127e89',
        CodeTypeID: '0481b09a709911e98f4e00163e127e89',
        CodeTypeName: '',
        CreateDate: '2019-05-07T15:24:07',
        CreatePerson: 'admin',
        Description: '',
        IsDefault: 'true',
        IsEnable: 'true',
        ParentCode: '',
        Seq: 1,
        Text: '设备3',
        UpdateDate: '2019-05-07T15:24:07',
        UpdatePerson: 'admin'
      }],
      code: '', // 编码
      text: '', // 文本
      currentTypeRow: { // 当前选中的字典类别
        CodeTypeID: '',
        CodeType: '',
        CodeTypeName: '',
        Description: '',
        Seq: ''
      },
      dialogEditVisible: false,
      dialogTypeVisible: false,
      dialogEditTitle: '新增数据字典',
      form: { // 数据字典
        CodeTypeID: '', // 数据字典类别ID
        CodeID: '', // 数据字典ID
        Value: '', // 数据字典编码
        Text: '', // 数据字典值
        ParentCode: '', // 父级数据字典
        Description: '', // 描述
        IsEnable: true, // 是否启用
        IsDefault: true, // 是否默认
        Seq: ''
      }
    }
  },
  created() {
    this.getTreeData()
  },
  methods: {
    // 获取所有类别列表
    getTreeData() {
      // const params = {
      //   OrganizeCode: localStorage['ai-orgcode'],
      //   UserID: localStorage['ai-userid']
      // }
      // getCodeTypeListAPI(params).then(res => {
      //   this.treeData = res.Data
      //   this.getData()
      // })
    },
    // 获取字典列表
    getData(type) {
      // const params = {
      //   OrganizeCode: localStorage['ai-orgcode'],
      //   UserID: localStorage['ai-userid'],
      //   CodeTypeID: this.currentTypeRow.CodeTypeID,
      //   Text: this.text,
      //   Value: this.code,
      //   index: this.currentPage,
      //   PageCount: this.pageSize
      // }
      // getCodeListAPI(params).then(res => {
      //   if (res.Rows.result === '1') {
      //     this.tableData = res.Data
      //     this.totalSize = res.Data1[0].TotalCount
      //   }
      // })
    },
    // 点击 添加btn
    add() {
      if (!this.currentTypeRow.CodeTypeID) {
        this.$message({
          message: '请选择字典类别',
          type: 'warning'
        })
        return
      }
      this.form = { // 数据字典
        CodeTypeID: this.currentTypeRow.CodeTypeID, // 数据字典类别ID
        CodeID: '', // 数据字典ID
        Value: '', // 数据字典编码
        Text: '', // 数据字典值
        ParentCode: '', // 父级数据字典
        Description: '', // 描述
        IsEnable: true, // 是否启用
        IsDefault: true, // 是否默认
        Seq: ''
      }
      this.dialogEditTitle = '新增数据字典'
      this.dialogEditVisible = true
    },
    // 点击 编辑btn
    edit(row) {
      this.form = row
      this.dialogEditVisible = true
      this.dialogEditTitle = '编辑数据字典'
    },
    // 点击 删除btn
    del(row) {
      this.$confirm('此操作将删除' + row.Text + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          message: '删除成功',
          type: 'success'
        })
        this.dialogEditVisible = false
        return
        const params = {
          OrganizeCode: localStorage['ai-orgcode'],
          UserID: localStorage['ai-userid'],
          Delete: [
            {
              CodeID: row.CodeID
            }
          ]
        }
        delCodeAPI(params).then(res => {
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
    // 点击 取消btn 新增/编辑
    closeDialog() {
      this.dialogEditVisible = false
      this.getData()
    },
    // 查询部门列表
    search() {
      this.currentPage = 1
      this.getData()
    },
    reset() {
      this.code = ''
      this.text = ''
      this.currentPage = 1
      this.getData()
    },
    // 点击组织结构列表，查询部门列表
    handleNodeClick(data) {
      this.currentTypeRow = data
      this.getData()
    },
    // 点击 数据字典
    handleCurrentCodeChange(data) {
      if (data) {
        this.form = {
          CodeTypeID: data.CodeTypeID, // 数据字典类别ID
          CodeID: data.CodeID, // 数据字典ID
          Value: data.Value, // 数据字典编码
          Text: data.Text, // 数据字典值
          ParentCode: data.ParentCode, // 父级数据字典
          Description: data.Description, // 描述
          IsEnable: data.IsEnable === 'true', // 是否启用
          IsDefault: data.IsDefault === 'true', // 是否默认
          Seq: data.Seq
        }
      } else {
        this.form = {
          CodeTypeID: '', // 数据字典类别ID
          CodeID: '', // 数据字典ID
          Value: '', // 数据字典编码
          Text: '', // 数据字典值
          ParentCode: '', // 父级数据字典
          Description: '', // 描述
          IsEnable: true, // 是否启用
          IsDefault: true, // 是否默认
          Seq: data.Seq
        }
      }
    },
    refreshTypeList() {
      this.getTreeData()
    },
    // 改变条数
    handleSizeChange(val) {
      this.pageSize = val
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 80px);
  .title {
    font-size: 14px;
    color: #28356c;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .orgCard {
    width: 20%;
    min-height: 100%;
  }
  .departmentCard {
    width: calc(80% - 20px);
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

