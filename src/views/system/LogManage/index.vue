<template>
  <div class="app-container">
    <el-card>
      <!-- 顶部操作栏 -->
      <div class="filter-container">

        <el-form :inline="true">
          <el-form-item>
            <el-date-picker
              v-model="date"
              type="date"
              placeholder="选择日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy-MM-dd"
              :picker-options="dateOption"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search()">查询</el-button>
          </el-form-item>
        </el-form>

      </div>
      <el-tabs v-model="activeName">
        <el-tab-pane label="登录日志" name="login">
          <login-table :table-data="tableData" />
        </el-tab-pane>
        <el-tab-pane label="操作日志" name="operation">
          <operation-table :table-data="tableData" />
        </el-tab-pane>
        <!-- <el-tab-pane label="系统日志" name="system">
          <system-table :table-data="tableData" />
        </el-tab-pane> -->
      </el-tabs>
      <br>
      <!-- 分页 -->
      <el-pagination
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalSize"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>
<script>
import { getLoginLogListAPI, getOperationListAPI } from '@/api/system'
import LoginTable from './components/loginTable'
import OperationTable from './components/operationTable'
export default {
  components: {
    LoginTable,
    OperationTable
  },
  data() {
    return {
      date: '', // 日期 2020-04-06格式，默认今天
      activeName: 'login', // 日志类型，默认登录日志
      currentPage: 1,
      pageSize: 10,
      totalSize: 0,
      tableData: [],
      tableData0: [{
        HostIP: null,
        HostName: '',
        LogHistoryID: '767732dff3f611eb8f4e00163e127e89',
        LoginCity: '广东-珠海市',
        LoginDate: '2011-08-03T09:02:27',
        UserID: 'admin',
        UserName: '超级管理员'
      }, {
        HostIP: null,
        HostName: '',
        LogHistoryID: '767732dff3f611eb8f4e00163e127e92',
        LoginCity: '广东-珠海市',
        LoginDate: '2011-08-04T09:02:27',
        UserID: 'admin',
        UserName: '超级管理员'
      }, {
        HostIP: null,
        HostName: '',
        LogHistoryID: '767732dff3f611eb8f4e00163e127e91',
        LoginCity: '广东-珠海市',
        LoginDate: '2011-08-05T09:02:27',
        UserID: 'admin',
        UserName: '超级管理员'
      }, {
        HostIP: null,
        HostName: '',
        LogHistoryID: '767732dff3f611eb8f4e00163e127e90',
        LoginCity: '广东-珠海市',
        LoginDate: '2011-08-06T09:02:27',
        UserID: 'admin',
        UserName: '超级管理员'
      }],
      tableData1: [{
        Date: '2021-07-01T10:53:39',
        IsDelete: 0,
        LogID: '898c550dda1711eba7c000163e0b5c5d',
        Message: '[\r\n  {\r\n    "CreateUser": "0af7e783c98a49008944ce2ca57f8eaf",\r\n    "ItemProjectID": "cce6d69f92344dc48c081d6bd43e76db",\r\n    "PowerBasicInformationID": "d99f8ff6d33e11eba7c000163e0b5c5d",\r\n    "AccountNumber": "",\r\n    "Industry": "工业用电",\r\n    "CertificateName": "身份证",\r\n    "IdentificationNumber": "",\r\n    "ElectricityAddress": "河北省-秦皇岛市-山海关区-路南街道---",\r\n    "PostalAddress": "",\r\n    "LegalRepresentative": "",\r\n    "IDNumber": "",\r\n    "FixedTelephone": "",\r\n    "MobilePhone": ""\r\n  }\r\n]',
        OrganizeCode: 'JLSJ',
        Position: '接口',
        Target: '用电客户基本信息',
        Type: '修改',
        UserCode: 'admin',
        UserID: '0af7e783c98a49008944ce2ca57f8eaf',
        UserName: ''
      }, {
        Date: '2021-07-02T10:53:39',
        IsDelete: 0,
        LogID: '898c550dda1711eba7c000163e0b5c5d',
        Message: '[\r\n  {\r\n    "CreateUser": "0af7e783c98a49008944ce2ca57f8eaf",\r\n    "ItemProjectID": "cce6d69f92344dc48c081d6bd43e76db",\r\n    "PowerBasicInformationID": "d99f8ff6d33e11eba7c000163e0b5c5d",\r\n    "AccountNumber": "",\r\n    "Industry": "工业用电",\r\n    "CertificateName": "身份证",\r\n    "IdentificationNumber": "",\r\n    "ElectricityAddress": "河北省-秦皇岛市-山海关区-路南街道---",\r\n    "PostalAddress": "",\r\n    "LegalRepresentative": "",\r\n    "IDNumber": "",\r\n    "FixedTelephone": "",\r\n    "MobilePhone": ""\r\n  }\r\n]',
        OrganizeCode: 'JLSJ',
        Position: '接口',
        Target: '用电客户基本信息',
        Type: '修改',
        UserCode: 'admin',
        UserID: '0af7e783c98a49008944ce2ca57f8eaf',
        UserName: ''
      }],
      dateOption: { // 日期范围：今天以及今天以前
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  watch: {
    activeName() {
      this.currentPage = 1
      this.totalSize = 0
      this.getData()
    },
    date() {
      this.currentPage = 1
      this.totalSize = 0
      this.getData()
    }
  },
  created() {
    this.getData()
  },
  methods: {
    // 获取日志列表
    getData(type) {
      const params = {}
      this.tableData = []
      switch (this.activeName) {
        case 'login':
          this.tableData = this.tableData0
          break
        case 'operation':
          this.tableData = this.tableData1
          break
        case 'system':
          break
        default:
          break
      }

      // let params = {}
      // switch (this.activeName) {
      //   case 'login':
      //     params = {
      //       OrganizeCode: localStorage['ai-orgcode'],
      //       UserID: localStorage['ai-userid'],
      //       logDate: this.date,
      //       index: this.currentPage,
      //       PageCount: this.pageSize
      //     }
      //     getLoginLogListAPI(params).then(res => {
      //       if (res.Rows.result === '1') {
      //         this.tableData = res.Data
      //         this.totalSize = res.Data1[0].TotalCount
      //       } else {
      //         this.$message({
      //           message: res.Rows.remark,
      //           type: 'error'
      //         })
      //       }
      //     }).catch(res => {
      //       this.$message({
      //         message: res.Rows.remark,
      //         type: 'error'
      //       })
      //     })
      //     break
      //   case 'operation':
      //     params = {
      //       OrganizeCode: localStorage['ai-orgcode'],
      //       UserID: localStorage['ai-userid'],
      //       logDate: this.date,
      //       index: this.currentPage,
      //       PageCount: this.pageSize
      //     }
      //     getOperationListAPI(params).then(res => {
      //       if (res.Rows.result === '1') {
      //         this.tableData = res.Data
      //         this.totalSize = res.Data1[0].TotalCount
      //       } else {
      //         this.$message({
      //           message: res.Rows.remark,
      //           type: 'error'
      //         })
      //       }
      //     }).catch(res => {
      //       this.$message({
      //         message: res.Rows.remark,
      //         type: 'error'
      //       })
      //     })
      //     break
      //   case 'system':
      //     break
      //   default:
      //     break
      // }
    },
    // 查询
    search() {
      this.currentPage = 1
      this.getData()
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getData()
    },
    handleCurrentChange(val) {
      this.currentPage = val
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
