<template>
  <div class="app-container">
    <el-card v-if="!showDetail" class="departmentCard">
      <div class="back" @click="goBack">
        <i
          class="el-icon-arrow-left"
        />上一步
      </div>
      <div class="filter-container">
        <el-form :inline="true">
          <el-form-item>
            <el-button type="primary" @click="add()">添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="image">
        <img src="http://47.97.75.116:8084/FileDown/2021/FileImg/Img//微信图片_20210802154639-1627890420726.png" alt="">
      </div>
      <el-table
        ref="table"
        stripe
        :data="tableData"
        :height="tableHeight"
        style="width: 100%;margin-bottom: 20px;"
        row-key="ItemID"
        default-expand-all
        highlight-current-row
      >
        <el-table-column prop="Prev" label="管孔上行" align="center" />
        <el-table-column prop="Next" label="管孔下行" align="center" />
        <el-table-column prop="State" label="管道使用情况" align="center" />
        <el-table-column prop="Num" label="管道编号" align="center" />
        <el-table-column prop="PipeNumber" label="硅芯管编号" align="center" />
        <el-table-column prop="Test" label="贯通测试" align="center" />
        <el-table-column prop="Unblocked" label="管道畅通" align="center">
          <template slot-scope="scope">
            <i v-if="scope.row.Unblocked === '1'" style="color:#28356c;" class="el-icon-check" />
            <i v-else style="color:#28356c" class="el-icon-close" />
          </template>
        </el-table-column>
        <el-table-column prop="PipeIssue" label="管道问题" align="center" />
        <el-table-column prop="Time" label="排查时间" align="center" />
        <el-table-column prop="Name" label="排查人" align="center" />
        <el-table-column prop="Note" label="备注" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="detail(scope.row)">详情</el-button>
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
    <Detail v-if="showDetail" :show-draw-list="showDetail" @back="back" />
  </div>
</template>
<script>
import { getCodeTypeListAPI, getCodeListAPI, delCodeAPI } from '@/api/system'
import EditForm from './components/editForm'
import Detail from './components/detail'
export default {
  components: {
    EditForm,
    Detail
  },
  data() {
    return {
      tableHeight: innerHeight - 370,
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      showDetail: false,
      tableData: [{
        Prev: 'G30/K258+881/001E',
        Next: 'G30/K258+881/003E',
        State: '自用',
        Num: 1,
        PipeNumber: 'GYTA-24',
        Test: '<10s',
        Unblocked: '0',
        PipeIssue: '无',
        Time: '2023/03/10 12:10:10',
        Name: '李四',
        Note: ''
      }, {
        Prev: 'G30/K258+881/001E',
        Next: 'G30/K258+881/003E',
        State: '自用',
        Num: 2,
        PipeNumber: 'GYTA-24',
        Test: '<10s',
        Unblocked: '0',
        PipeIssue: '无',
        Time: '2023/03/10 12:10:10',
        Name: '李四',
        Note: ''
      }, {
        Prev: 'G30/K258+881/001E',
        Next: 'G30/K258+881/003E',
        State: '自用',
        Num: 3,
        PipeNumber: 'GYTA-24',
        Test: '<10s',
        Unblocked: '0',
        PipeIssue: '无',
        Time: '2023/03/10 12:10:10',
        Name: '李四',
        Note: ''
      }, {
        Prev: 'G30/K258+881/001E',
        Next: 'G30/K258+881/003E',
        State: '自用',
        Num: 4,
        PipeNumber: 'GYTA-24',
        Test: '<10s',
        Unblocked: '0',
        PipeIssue: '无',
        Time: '2023/03/10 12:10:10',
        Name: '李四',
        Note: ''
      }],
      code: '', // 编码
      text: '', // 文本
      loading: false,
      dialogEditVisible: false,
      dialogTypeVisible: false,
      dialogEditTitle: '新增',
      form: {
        Num: '',
        Position: '',
        Color: '',
        State: '',
        CableModel: '',
        DetailWork: '',
        Test: '',
        Unblocked: '',
        leakproofness: '',
        PipePosition: '',
        PipeModel: '',
        PipeIssue: '',
        HasTunnel: '',
        Note: ''
      }
    }
  },
  created() {
    // this.getTreeData()
  },
  methods: {
    setFirstName(arr) {
      this.arr1 = []
      var obj = {}
      var k
      for (var i = 0, len = arr.length; i < len; i++) {
        k = arr[i].firstName
        if (obj[k]) {
          obj[k]++
        } else {
          obj[k] = 1
        }
      }
      console.log(obj) // {福建省人民医院: 10}
      // 保存结果{el-'元素'，count-出现次数}
      for (var o in obj) {
        for (let i = 0; i < obj[o]; i++) {
          if (i === 0) {
            this.arr1.push(obj[o])
          } else {
            this.arr1.push(0)
          }
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      console.log(rowIndex)
      if (columnIndex === 9 || columnIndex === 10 || columnIndex === 11 || columnIndex === 12 || columnIndex === 13) {
        if (rowIndex === 0) {
          return {
            rowspan: 10,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
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
        Num: '',
        Position: '',
        Color: '',
        State: '',
        CableModel: '',
        DetailWork: '',
        Test: '',
        Unblocked: '',
        leakproofness: '',
        PipePosition: '',
        PipeModel: '',
        PipeIssue: '',
        HasTunnel: '',
        Note: ''
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
    detail(row) {
      this.form = row
      this.showDetail = true
    },
    closeLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    back() {
      this.showDetail = false
    },
    goBack() {
      this.$emit('back')
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
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  min-height: calc(100vh - 80px);
  .departmentCard {
    width: 100%;
    .back {
      font-size: 14px;
      color: #28356c;
      background: #E5EAFF;
      width: 120px;
      height: 34px;
      text-align: center;
      line-height: 34px;
      margin-bottom: 20px;
      cursor: pointer;
      margin-right: 10px;
      float: left;
    }
    .filter-container {
      float: right;
    }
    .image {
      width: 100%;
      clear: both;
    }
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
  /* height: 200px!important; */
}
</style>

