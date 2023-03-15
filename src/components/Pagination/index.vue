<template>
  <div class="text_r">
    <el-pagination
      class="paginationstyle"
      :current-page="pageData.pageIndex"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageData: {
        pageIndex: 1,
        pageSize: 10
      },
      total: 0
    }
  },
  mounted() {
    this.$parent.search(this.pageData).then(res => {
      this.total = res.total || res.totalNum || res.ItemStatisticss1[0].TotalCount
    })
  },
  methods: {
    getData(pageIndex) {
      this.pageData = {
        ...this.pageData,
        pageIndex: pageIndex || 1
      }
      this.$parent.search().then(res => {
        this.total = res.total || res.totalNum || res.ItemStatisticss1[0].TotalCount
      })
    },
    // 修改每页条数
    handleSizeChange(pageSize) {
      this.pageData = {
        pageSize,
        pageIndex: 1
      }
      this.$parent.search(this.pageData).then(res => {
        this.total = res.total || res.totalNum || res.ItemStatisticss1[0].TotalCount
      })
    },
    // 修改页数
    handleCurrentChange(pageIndex) {
      this.pageData = {
        ...this.pageData,
        pageIndex
      }
      this.$parent.search(this.pageData).then(res => {
        this.total = res.total || res.totalNum || res.ItemStatisticss1[0].TotalCount
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.text_r{
  text-align: center;
  margin-top: 20px;
}
</style>

