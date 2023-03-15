<template>
  <div class="app-container">
    <el-card v-if="!showPipeDetail" class="departmentCard">
      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary" @click="add()">添加</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary"><a href="通信管道排查样表0707.xlsx" target="_blank" download="通信管道排查样表0707.xlsx">导出</a></el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- <div class="filter-container">
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
      </div> -->
      <el-table
        ref="table"
        stripe
        :data="tableData"
        :height="tableHeight"
        style="width: 100%;margin-bottom: 20px;"
        row-key="ItemID"
        default-expand-all
        highlight-current-row
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
      >
        <el-table-column prop="RoadName" label="路段名称" align="center" />
        <el-table-column prop="Mileage" label="里程（KM）" align="center" width="200px" />
        <el-table-column prop="StartNum" label="起始桩号（KM）" align="center" />
        <el-table-column prop="EndNum" label="终端桩号（KM）" align="center" />
        <el-table-column prop="HoleNumber" label="主线人孔数" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <!-- <el-button type="text" @click="del(scope.row)">删除</el-button> -->
            <el-button type="text" @click="view(scope.row)">查看</el-button>
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

    <!-- 详情 -->
    <PipeDetail v-if="showPipeDetail" :show-draw-list="showPipeDetail" @back="back" />
  </div>
</template>
<script>
import { getCodeTypeListAPI, getCodeListAPI, delCodeAPI } from '@/api/system'
import EditForm from './components/editForm'
import PipeDetail from './components/pipeDetail/index.vue'

export default {
  name: 'CodeManage', // 数据字典
  components: {
    EditForm,
    PipeDetail
  },
  data() {
    return {
      tableHeight: innerHeight - 370,
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      tableData: [{
        ItemID: 123001,
        RoadName: 'G30（连霍高速）郑州段',
        Mileage: 121.88,
        StartNum: 'K258+881',
        EndNum: 'K258+886',
        HoleNumber: 33
      }, {
        ItemID: 123002,
        RoadName: 'G31（连霍高速）郑州段',
        Mileage: 98.36,
        StartNum: 'J258+881',
        EndNum: 'J258+886',
        HoleNumber: 12
      }, {
        ItemID: 123003,
        RoadName: 'G32（连霍高速）郑州段',
        Mileage: 128.63,
        StartNum: 'L258+881',
        EndNum: 'L258+886',
        HoleNumber: 36
      }, {
        ItemID: 123004,
        RoadName: 'G34（连霍高速）郑州段',
        Mileage: 33.62,
        StartNum: 'M258+881',
        EndNum: 'M258+886',
        HoleNumber: 8
      }],
      code: '', // 编码
      text: '', // 文本
      showPipeDetail: false,
      showDetailList: false,
      dialogEditVisible: false,
      dialogEditTitle: '新增',
      form: {
        ItemID: '',
        RoadName: '',
        Mileage: '',
        StartNum: '',
        EndNum: '',
        HoleNumber: ''
      }
    }
  },
  created() {
    // this.getTreeData()
  },
  methods: {
    // 获取所有类别列表
    getTreeData() {
      const params = {
        OrganizeCode: localStorage['ai-orgcode'],
        UserID: localStorage['ai-userid']
      }
      getCodeTypeListAPI(params).then(res => {
        this.treeData = res.Data
        this.getData()
      })
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
      this.form = {
        ItemID: '',
        RoadName: '',
        Mileage: '',
        StartNum: '',
        EndNum: '',
        HoleNumber: ''
      }
      this.dialogEditTitle = '新增'
      this.dialogEditVisible = true
    },
    // 点击 编辑btn
    edit(row) {
      this.form = row
      this.dialogEditVisible = true
      this.dialogEditTitle = '编辑'
    },
    view(row) {
      this.showPipeDetail = true
    },
    back() {
      this.showPipeDetail = false
    },
    // 点击 删除btn
    del(row) {
      this.$confirm('此操作将删除' + row.Text + ', 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
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

  .orgCard {
    width: 20%;
    min-height: 100%;
  }
  .departmentCard {
    // width: calc(80% - 20px);
    width: 100%;
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
.DrawingGeneration .el-table__header,
.DrawingGeneration .el-table__body{
  width: calc(80% - 20px);
}
</style>

