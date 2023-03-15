<template>
  <div>
    <el-table
      stripe
      :data="tableData"
      :height="tableHeight"
    >
      <el-table-column prop="UserID" label="登录账号" align="center" width="120px" />
      <el-table-column prop="UserName" label="用户名称" align="center" width="120px" />
      <el-table-column prop="HostIP" label="登录IP" />
      <el-table-column prop="HostName" label="登录机器名" />
      <el-table-column prop="LoginCity" label="登录位置" />
      <el-table-column prop="LoginDate" label="登录日期" align="center" width="200px">
        <template slot-scope="scope">
          <span v-if="scope.row.LoginDate">
            {{ new Date(scope.row.LoginDate) | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}
          </span>
          <span v-else>
            无
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      tableHeight: innerHeight - 320
    }
  }
}
</script>
<style>
.has-gutter tr th {
  background: #e1e6f1 !important;
  color: #767fa2;
}
.el-table {
  color: #28356c;
}
</style>
