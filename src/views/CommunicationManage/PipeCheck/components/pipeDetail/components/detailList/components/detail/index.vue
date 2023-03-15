<template>
  <div class="app-container">
    <el-card class="departmentCard">
      <div class="back" @click="goBack">
        <i
          class="el-icon-arrow-left"
        />返回列表
      </div>
      <div class="steps" style="height: 300px;">
        <h4 style="width:300px;text-align:center;">全链路信息展示</h4>
        <div class="step">
          <div class="icon" />
          <div class="detail">
            <span class="num">
              人手孔编号
            </span>
            <span class="state">
              状态
            </span>
            <span class="company">
              租赁公司
            </span>
            <span class="used">
              租赁用途
            </span>
            <span class="time">
              租赁到期时间
            </span>
          </div>
        </div>

        <div v-for="(item, i) in tableData" :key="i" class="step">
          <div class="icon">
            <div class="point" :class="{'lease':item.State==1,'used':item.State==2,'space':item.State==3}" />
            <div class="line" />
          </div>
          <div class="detail" :class="{'current':item.Num=='G30/K258+881/003E'}">
            <span class="num">{{ item.Num }}</span>
            <span class="state">{{ item.State == 1 ? '租赁' : item.State == 2 ? '自用' : '空闲' }}</span>
            <span class="company">{{ item.Company }}</span>
            <span class="used">{{ item.Used }}</span>
            <span class="time">{{ item.Time }}</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getCodeTypeListAPI, getCodeListAPI, delCodeAPI } from '@/api/system'
export default {
  data() {
    return {
      tableHeight: innerHeight - 370,
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      tableData: [{
        Num: 'G30/K258+881/001E',
        State: 1,
        Name: '李四',
        Company: '中国移动',
        Used: '通信',
        Time: '2023-05-01',
        Note: ''
      }, {
        Num: 'G30/K258+881/002E',
        State: 2,
        Name: '李四',
        Note: ''
      }, {
        Num: 'G30/K258+881/003E',
        State: 3,
        Name: '李四',
        Note: ''
      }, {
        Num: 'G30/K258+881/004E',
        State: 3,
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
  padding: 0;
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

  }
  .steps {
    float: left;
      width: 100%;
      .step {
        display: flex;
        justify-content: start;
        .icon {
          position: relative;
          width: 30px;
          height: 40px;
          .point {
            position: absolute;
            top: 11px;
            left: 1px;
            z-index: 99;
            width: 17px;
            height: 17px;
            background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
            border-radius: 17px;
          }
          .lease {
            background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
          }
          .used {
            background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
          }
          .space {
            background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
          }
          .line {
            position: absolute;
            left: 9px;
            top: 0;
            width: 1px;
            height: 40px;
            background: rgb(112, 112, 119);
          }

        }
        .detail {
          span {
            line-height: 40px;
            display: block;
            float: left;
          }
          .num {
            width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .state {
            width: 80px;
          }
          .company {
            width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .used {
            width: 100px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .company {
            width: 100px;
          }
        }
        .current {
            color: red;
        }
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

