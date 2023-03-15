<template>
  <div :id="id" :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    data: {
      handler: function(newVal, oldVal) {
        // if (this.chart) {
        //   this.chart.dispose()
        //   this.chart = null
        // }

        this.initChart()
      },
      deep: true
    }
  },

  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      const self = this
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption(self.data, true)
    }
  }
}
</script>
