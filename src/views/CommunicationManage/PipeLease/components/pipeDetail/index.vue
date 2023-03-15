<template>
  <div class="app-container">
    <el-card v-if="!showDetailList" class="departmentCard">
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
      <el-table
        ref="table"
        stripe
        :data="tableData"
        :height="tableHeight"
        style="width: 100%;margin-bottom: 20px;"
        row-key="ItemID"
        default-expand-all
        highlight-current-row
        :span-method="objectSpanMethod"
      >
        <el-table-column prop="HoleIndex" label="人手孔序号" align="center" />
        <el-table-column prop="StartNum" label="人手孔桩号起点" align="center" width="200px" />
        <el-table-column prop="EndNum" label="人手孔桩号终点" align="center" />
        <el-table-column prop="HoleNum" label="人手孔编号" align="center" />
        <!-- <el-table-column prop="HoleImg" label="人手孔照片（通信管道排列照片）" align="center">
          <template slot-scope="scope">
            <el-popover placement="top-start" title="" trigger="hover">
              <img :src="scope.row.HoleImg" alt="" style="width: 150px;height: 150px">
              <img slot="reference" :src="scope.row.HoleImg" style="width: 30px;height: 30px">
            </el-popover>
          </template>
        </el-table-column> -->
        <el-table-column prop="PipeModel" label="管道类型/规格编号" align="center" />
        <el-table-column prop="Count" label="管孔数" align="center" />
        <el-table-column label="操作" align="center" fixed="right" width="120px">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="detail(scope.row)">明细</el-button>
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
    <DetailList v-if="showDetailList" :show-draw-list="showDetailList" @back="back" />
  </div>
</template>
<script>
import { getCodeTypeListAPI, getCodeListAPI, delCodeAPI } from '@/api/system'
import EditForm from './components/editForm'
import DetailList from './components/detailList/index.vue'
export default {
  components: {
    EditForm,
    DetailList
  },
  data() {
    return {
      tableHeight: innerHeight - 370,
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      tableData: [{
        HoleIndex: '001',
        StartNum: 'K528+881',
        EndNum: 'K001+000',
        HoleNum: 'GFZZLHZX-001',
        HoleImg: 'http://47.97.75.116:8084/FileDown/2021/FileImg/Img//微信图片_20210802154639-1627890420726.png',
        PipeModel: '硅芯管∅40/33',
        Count: '12'
      }, {
        HoleIndex: '002',
        StartNum: 'K533+481',
        EndNum: 'K003+004',
        HoleNum: 'GFZZLHZX-002',
        HoleImg: 'http://47.97.75.116:8084/FileDown/2021/FileImg/Img//微信图片_20210802154639-1627890420726.png',
        PipeModel: '硅芯管∅40/33',
        Count: '10'
      }, {
        HoleIndex: '003',
        StartNum: 'K528+886',
        EndNum: 'K001+007',
        HoleNum: 'GFZZLHZX-003',
        HoleImg: 'http://47.97.75.116:8084/FileDown/2021/FileImg/Img//微信图片_20210802154639-1627890420726.png',
        PipeModel: '硅芯管∅40/33',
        Count: '7'
      }, {
        HoleIndex: '004',
        StartNum: 'K528+889',
        EndNum: 'K001+005',
        HoleNum: 'GFZZLHZX-006',
        HoleImg: 'http://47.97.75.116:8084/FileDown/2021/FileImg/Img//微信图片_20210802154639-1627890420726.png',
        PipeModel: '硅芯管∅40/33',
        Count: '13'
      }],
      code: '', // 编码
      text: '', // 文本
      dialogEditVisible: false,
      dialogTypeVisible: false,
      dialogEditTitle: '新增',
      showDetailList: false,
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
    detail(row) {
      this.showDetailList = true
    },
    back() {
      this.showDetailList = false
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

