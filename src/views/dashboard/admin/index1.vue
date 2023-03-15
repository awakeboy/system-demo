<template>
  <div class="dashboard-editor-container">
    <el-row>
      <el-input
        v-model="name"
        style="margin-bottom: 5px;"
        placeholder="请输入路段名称"
        maxlength="60"
        show-word-limit
      />
    </el-row>
    <div id="boxMap" ref="mapContainer" />
    <div v-show="isShow" class="clip" />
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  data() {
    return {
      loading: true,
      isShow: true,
      name: '',
      topData: {
        LastLoginDate: '', // 登录时间
        LoginCount: 0, // 登录次数
        ItemCount: 0, // 项目总数量
        ItemCapacity: 0 // 项目总容量
      },
      ElectricityType: {}, // 用电类型
      pointArr: [
      ],
      Distribute: [] // 城市列表
    }
  },
  mounted() {
    this.buildMap()
  },
  methods: {
    new() {
      [
        {
          featureType: 'water',
          elementType: 'all',
          stylers: {
            color: '#044161'
          }
        },
        {
          featureType: 'land',
          elementType: 'all',
          stylers: {
            color: '#004981'
          }
        },
        {
          featureType: 'boundary',
          elementType: 'geometry',
          stylers: {
            color: '#064f85'
          }
        },
        {
          featureType: 'railway',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'highway',
          elementType: 'geometry',
          stylers: {
            color: '#004981'
          }
        },
        {
          featureType: 'highway',
          elementType: 'geometry.fill',
          stylers: {
            color: '#005b96',
            lightness: 1
          }
        },
        {
          featureType: 'highway',
          elementType: 'labels',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'arterial',
          elementType: 'geometry',
          stylers: {
            color: '#004981'
          }
        },
        {
          featureType: 'arterial',
          elementType: 'geometry.fill',
          stylers: {
            color: '#00508b'
          }
        },
        {
          featureType: 'poi',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'green',
          elementType: 'all',
          stylers: {
            color: '#056197',
            visibility: 'off'
          }
        },
        {
          featureType: 'subway',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'manmade',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'local',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'arterial',
          elementType: 'labels',
          stylers: {
            visibility: 'off'
          }
        },
        {
          featureType: 'boundary',
          elementType: 'geometry.fill',
          stylers: {
            color: '#029fd4'
          }
        },
        {
          featureType: 'building',
          elementType: 'all',
          stylers: {
            color: '#1a5787'
          }
        },
        {
          featureType: 'label',
          elementType: 'all',
          stylers: {
            visibility: 'off'
          }
        }
      ]
    },
    async mounted() { // 别漏了async 哦
    // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('container'))

      // 这里赋值呼吸灯的数据 如：this.option.series[0].data = datas

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(this.option)
    },
    // 初始化地图
    buildMap() {
      const map = new BMap.Map('boxMap', { enableMapClick: false }) // 创建Map实例，禁止默认弹框
      // map.centerAndZoom('河南省', 10)
      var point = new BMap.Point(113.62, 34.16)
      map.centerAndZoom(point, 8)
      map.setMapStyleV2({
        styleId: '2f2b43bc6e19a4555653ecafdcbd9f25'
      })
      const myDis = new window.BMapLib.DistanceTool(map)
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
      var scaleCtrl = new BMap.ScaleControl() // 添加比例标记
      map.addControl(scaleCtrl)
      window.map = map // 将map变量储存在全局
      window.myDis = myDis // 将map变量储存在全局

      // 创建点标记
      const pointList = [
        new BMap.Point(114.318, 35.576),
        new BMap.Point(114.628, 35.056),
        new BMap.Point(114.058, 34.476),
        new BMap.Point(114.598, 34.316),
        new BMap.Point(114.318, 33.976),
        new BMap.Point(113.389, 33.528)
      ]
      // // 自定义创建点的图标   Size  里设置大小
      // var myIcon = new BMap.Icon('@/assets/marker1.png', new BMap.Size(1, 1))
      // // 创建标注
      // var marker = new BMap.Marker(new BMap.Point(113.389, 33.528), { icon: myIcon })
      // 画折线
      this.draw()
      // 后台管理系统，用于首页展示区域地图，需使用地图控件绘制部分线路的轮廓图，线路中添加标记点并进行注释。
      // 需使用个性化地图改变默认颜色风格；定位地图中心点级缩放级别；根据坐标添加标记点；同时绘制多条连接线，标记点信息窗口功能展示图片及相关信息；
      // 创建信息窗口
      var opts = {
        width: 200,
        height: 80,
        title: ''
      }
      setTimeout(() => {
        this.isShow = false
      }, 300)
      // 自定义创建点的图标   Size  里设置大小
      var myIcon = new BMap.Icon('@/assets/marker.png', new BMap.Size(1, 1))
      for (var i = 0; i < pointList.length; i++) {
        const mk = new BMap.Marker(pointList[i], { icon: myIcon })
        map.addOverlay(mk)
        this.addClickHandler(mk, opts)
      }

      map.addEventListener('click', function(e) {
        console.log(e.point)
      })
    },
    // 点标记添加点击事件
    addClickHandler(marker, opts) {
      marker.addEventListener('click', (e) => {
        const addrssInfo = '坐标<br/>lat：' + e.point.lat + '；<br/>lng: ' + e.point.lng + ';'
        const gc = new BMap.Geocoder()
        gc.getLocation(e.point, res => {
          opts.title = res.address
          var infoWindow = new BMap.InfoWindow(addrssInfo, opts)
          map.openInfoWindow(infoWindow, e.point) // 开启信息窗口
        })
      })
    },
    // 画折线
    draw(submit) {
      var polyline = new BMap.Polyline([
        new BMap.Point(114.318, 35.576),
        new BMap.Point(114.628, 35.056),
        new BMap.Point(114.058, 34.476),
        new BMap.Point(114.598, 34.316),
        new BMap.Point(114.318, 33.976),
        new BMap.Point(113.389, 33.528)
      ], { strokeColor: '#d4af07', strokeWeight: 2, strokeOpacity: 0.5 })
      map.addOverlay(polyline) // 增加折线
      return
      const drawPoints = []
      this.pointArr = [

      ]
      var myIcon = new BMap.Icon(require('@/assets/marker.png'), new BMap.Size(23, 25), { anchor: new BMap.Size(10, 24), imageOffset: new BMap.Size(0, 0) }) // 定义自己的标注
      this.pointArr.forEach((v, i) => {
        drawPoints.push(new BMap.Point(v.lng, v.lat))
        const marker = new BMap.Marker(new BMap.Point(v.lng, v.lat), { icon: myIcon })
        if (i === 0) {
          map.addOverlay(marker)
          var label = new BMap.Label('起点', { offset: new BMap.Size(30, 0) })
        } else if (i === this.pointArr.length - 1) {
          map.addOverlay(marker)
          var label = new BMap.Label('终点，全长' + this.ruleForm.Distance + '米', { offset: new BMap.Size(30, 0) })
        }
        marker.setLabel(label)
      })
      var polyline = new BMap.Polyline(
        drawPoints,
        { strokeColor: 'blue', strokeWeight: 2, strokeOpacity: 0.5 }
      )
      map.addOverlay(polyline)
    }

  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
    // color: #d4af07;
  }
}
#boxMap {
  width: 100%;
  height: 80vh;
}
.clip {
 width: 100%;
  height: 88vh;
  background: #f0f2f5;
  position: absolute;
  top: 32px;
  left: 0;
}
</style>
