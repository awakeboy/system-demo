<template>
  <div class="app-container">
    <el-card class="departmentCard">
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
        <el-table-column prop="Num" label="管道编号" align="center" />
        <el-table-column prop="Position" label="管道位置" align="center" width="200px" />
        <el-table-column prop="Color" label="管道色标" align="center" />
        <el-table-column prop="State" label="使用情况" align="center" />
        <el-table-column prop="CableModel" label="线缆型号" align="center" />
        <el-table-column prop="DetailWork" label="具体业务" align="center" />
        <el-table-column prop="Test" label="贯通测试" align="center" />
        <el-table-column prop="Unblocked" label="管道畅通" align="center">
          <template slot-scope="scope">
            <i v-if="scope.row.Unblocked === '1'" style="color:#28356c;" class="el-icon-check" />
            <i v-else style="color:#28356c" class="el-icon-close" />
          </template>
        </el-table-column>
        <el-table-column prop="leakproofness" label="密闭性" align="center">
          <template slot-scope="scope">
            <i v-if="scope.row.leakproofness === '1'" class="el-icon-check" />
            <i v-else class="el-icon-close" />
          </template>
        </el-table-column>
        <el-table-column prop="PipePosition" label="管道位置" align="center" />
        <el-table-column prop="PipeModel" label="过桥管道型号/长度" align="center" />
        <el-table-column prop="PipeIssue" label="管道问题" align="center" />
        <el-table-column prop="HasTunnel" label="是否有隧道长度/位置" align="center" />
        <el-table-column prop="Note" label="备注" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
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
  </div>
</template>
<script>
import { getCodeTypeListAPI, getCodeListAPI, delCodeAPI } from '@/api/system'
import EditForm from './components/editForm'
export default {
  components: {
    EditForm
  },
  data() {
    return {
      tableHeight: innerHeight - 370,
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      tableData: [{
        Num: 1,
        Position: '1-1',
        Color: '红*2',
        State: '自用',
        CableModel: 'GYTA-24',
        DetailWork: '监控光缆',
        Test: '<10s',
        Unblocked: '1',
        leakproofness: '0',
        PipePosition: '中分带',
        PipeModel: '玻璃钢310*190*5/800M',
        PipeIssue: '',
        HasTunnel: '牛郎隧道560米南幅北幅/东幅西幅',
        Note: ''
      }, {
        Num: 2,
        Position: '1-2',
        Color: '黄*2',
        State: '自用',
        CableModel: 'GYTA-24',
        DetailWork: '监控光缆',
        Test: '<10s',
        Unblocked: '0',
        leakproofness: '0',
        PipePosition: '中分带',
        PipeModel: '玻璃钢310*190*5/800M',
        PipeIssue: '',
        HasTunnel: '牛郎隧道560米南幅北幅/东幅西幅',
        Note: ''
      }, {
        Num: 3,
        Position: '1-3',
        Color: '绿*2',
        State: '自用',
        CableModel: 'GYTA-48',
        DetailWork: '监控光缆',
        Test: '<10s',
        Unblocked: '1',
        leakproofness: '1',
        PipePosition: '中分带',
        PipeModel: '玻璃钢310*190*5/800M',
        PipeIssue: '',
        HasTunnel: '牛郎隧道560米南幅北幅/东幅西幅',
        Note: ''
      }, {
        Num: 4,
        Position: '1-4',
        Color: '蓝*2',
        State: '空闲',
        CableModel: 'GYTA-48',
        DetailWork: '监控光缆',
        Test: '<10s',
        Unblocked: '0',
        leakproofness: '1',
        PipePosition: '中分带',
        PipeModel: '玻璃钢310*190*5/800M',
        PipeIssue: '',
        HasTunnel: '牛郎隧道560米南幅北幅/东幅西幅',
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
    },
    closeLoading() {
      setTimeout(() => {
        this.loading = false
      }, 500)
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

