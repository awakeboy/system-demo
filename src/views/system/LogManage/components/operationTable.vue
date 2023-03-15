<template>
  <div>
    <el-table stripe :data="tableData" :height="tableHeight">
      <el-table-column prop="UserCode" label="操作账号" align="center" width="120px" />

      <el-table-column prop="UserName" label="操作人" align="center" width="120px" />

      <el-table-column prop="Position" label="位置" align="center" width="120px" />

      <el-table-column prop="Target" label="对象" align="center" width="160px" />

      <el-table-column prop="Type" label="类型" align="center" />

      <el-table-column prop="Message" label="数据" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="showDialog(scope.row.Message)">查看</el-button>
        </template>
      </el-table-column>

      <el-table-column prop="Date" label="日期" align="center" width="200px">
        <template slot-scope="scope">
          <span v-if="scope.row.Date">
            {{ new Date(scope.row.Date) | parseTime('{y}-{m}-{d} {h}:{i}:{s}') }}
          </span>
          <span v-else>无</span>
        </template>
      </el-table-column>

    </el-table>

    <!-- 查看Message -->
    <el-dialog :visible.sync="dialogVisible" title="数据查看" :append-to-body="true">
      <span>{{ message }}</span>
    </el-dialog>
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
      tableHeight: innerHeight - 320,
      dialogVisible: false,
      message: ''
    }
  },
  methods: {
    // 点击查看，展示dialog
    showDialog(message) {
      this.message = message
      this.dialogVisible = true
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

