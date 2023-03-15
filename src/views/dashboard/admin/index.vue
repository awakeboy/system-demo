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
    <!-- <div v-show="isShow" class="clip" /> -->
  </div>
</template>

<script>
import pointImg from '@/assets/marker.png'
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap'
// require('echarts/extension/bmap/bmap')
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
    // this.buildMap()
    this.newmethod()
    // console.log(999,*)
  },
  methods: {
    newmethod() {
      var chartDom = document.getElementById('boxMap')
      var myChart = echarts.init(chartDom)
      var option
      const data = [
        { name: '1-1', value: 148 },
        { name: '1-2', value: 152 },
        { name: '1-3', value: 153 },
        { name: '1-4', value: 154 },
        { name: '1-5', value: 154 }
      ]
      const geoCoordMap = {
        '1-1': [114.3181, 35.5761],
        '1-2': [114.6281, 35.0561],
        '1-3': [114.5981, 34.3161],
        '1-4': [114.3181, 33.9761],
        '1-5': [113.3891, 33.5281]
      }
      const lines = [
        [1143181, 355761],
        [1146281, 350561],
        [1145981, 343161],
        [1143181, 339761],
        [1133891, 335281]
      ]
      // const busLines = [
      //   { coords: [[118.8062, 31.9208], [119.4543, 25.9222]], lineStyle: { color: '#4ab2e5' }},
      //   { coords: [[127.9688, 45.368], [119.4543, 25.9222]], lineStyle: { color: '#4fb6d2' }},
      //   { coords: [[110.3467, 41.4899], [119.4543, 25.9222]], lineStyle: { color: '#52b9c7' }},
      //   { coords: [[125.8154, 44.2584], [119.4543, 25.9222]], lineStyle: { color: '#5abead' }},
      //   { coords: [[116.4551, 40.2539], [119.4543, 25.9222]], lineStyle: { color: '#f34e2b' }},
      //   { coords: [[123.1238, 42.1216], [119.4543, 25.9222]], lineStyle: { color: '#f56321' }},
      //   { coords: [[114.4995, 38.1006], [119.4543, 25.9222]], lineStyle: { color: '#f56f1c' }},
      //   { coords: [[117.4219, 39.4189], [119.4543, 25.9222]], lineStyle: { color: '#f58414' }},
      //   { coords: [[112.3352, 37.9413], [119.4543, 25.9222]], lineStyle: { color: '#f58f0e' }},
      //   { coords: [[109.1162, 34.2004], [119.4543, 25.9222]], lineStyle: { color: '#f5a305' }},
      //   { coords: [[103.5901, 36.3043], [119.4543, 25.9222]], lineStyle: { color: '#e7ab0b' }},
      //   { coords: [[106.3586, 38.1775], [119.4543, 25.9222]], lineStyle: { color: '#dfae10' }},
      //   { coords: [[101.4038, 36.8207], [119.4543, 25.9222]], lineStyle: { color: '#d5b314' }},
      //   { coords: [[103.9526, 30.7617], [119.4543, 25.9222]], lineStyle: { color: '#c1bb1f' }},
      //   { coords: [[108.384366, 30.439702], [119.4543, 25.9222]], lineStyle: { color: '#b9be23' }},
      //   { coords: [[113.0823, 28.2568], [119.4543, 25.9222]], lineStyle: { color: '#a6c62c' }},
      //   { coords: [[102.9199, 25.46639], [119.4543, 25.9222]], lineStyle: { color: '#96cc34' }}
      // ]
      let prevPt = []
      const busLines = [].concat.apply(
        [],
        lines.map(function(busLine, idx) {
          const points = []
          for (let i = 0; i < busLine.length; i += 2) {
            let pt = [busLine[i], busLine[i + 1]]
            if (i > 0) {
              pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]]
            }
            pt = [pt[0] / 1e4, pt[1] / 1e4]
            if (idx === 0) prevPt = pt
            points.push(prevPt, pt)
            prevPt = pt
          }
          return {
            coords: points
          }
        })
      )
      var color = [
        { name: 'gr', color: '#00E400' },
        { name: 'yel', color: '#FFFF00' },
        { name: 'or', color: '#FF7E00' },
        { name: 'red', color: '#FF0000' },
        { name: 'pu', color: '#99004C' },
        { name: 'hh', color: '#7E0023' },
        { name: 'mo', color: '#5CC0D4' }// 监控点位颜色
      ]
      const convertData = function(data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
              note: '4535'
            })
          }
        }
        return res
      }

      option = {
        title: {
          text: '线路地图',
          subtext: '',
          sublink: '',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        bmap: {
          center: [113.624129, 34.160339],
          zoom: 8,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                featureType: 'water',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'land',
                elementType: 'all',
                stylers: {
                  color: '#f3f3f3'
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
                elementType: 'all',
                stylers: {
                  color: '#fdfdfd'
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
                  color: '#fefefe'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'geometry.fill',
                stylers: {
                  color: '#fefefe'
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
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'local',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
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
                elementType: 'all',
                stylers: {
                  color: '#fefefe'
                }
              },
              {
                featureType: 'building',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1'
                }
              },
              {
                featureType: 'label',
                elementType: 'labels.text.fill',
                stylers: {
                  color: '#999999'
                }
              }
            ]
          }
        },

        series: [
          // {
          //   name: 'pm2.5',
          //   type: 'scatter',
          //   coordinateSystem: 'bmap',
          //   data: convertData(data),
          //   symbolSize: function(val) {
          //     return val[2] / 10
          //   },
          //   encode: {
          //     value: 2
          //   },
          //   label: {
          //     formatter: '{b}',
          //     position: 'right',
          //     show: false
          //   },
          //   emphasis: {
          //     label: {
          //       show: true
          //     }
          //   }
          // },
          {
            name: '路段信息',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data),
            symbolSize: function(val) {
              return val[2] / 10
            },
            encode: {
              value: 2
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            label: {
              formatter: '{b}',
              position: 'right',
              show: true
            },
            itemStyle: {
              shadowBlur: 10,
              shadowColor: '#333'
            },
            emphasis: {
              scale: true
            },
            zlevel: 1,
            tooltip: {
              // show: true,
              alwaysShowContent: true,
              enterable: true, // 鼠标可以进入
              backgroundColor: 'rgba(255,255,255,0.0)', // 通过设置rgba调节背景颜色与透明度
              position: function(point, params, dom, rect, size) {
                // 鼠标坐标和提示框位置的参考坐标系是：以外层div的左上角那一点为原点，x轴向右，y轴向下
                // 提示框位置
                var x = 0 // x坐标位置
                var y = 0 // y坐标位置

                // 当前鼠标位置
                var pointX = point[0]
                var pointY = point[1]

                // 外层div大小
                // var viewWidth = size.viewSize[0];
                // var viewHeight = size.viewSize[1];

                // 提示框大小
                var boxWidth = size.contentSize[0]
                var boxHeight = size.contentSize[1]

                // boxWidth > pointX 说明鼠标左边放不下提示框
                if (boxWidth > pointX) {
                  x = 5
                } else { // 左边放的下
                  x = pointX - boxWidth
                }

                // boxHeight > pointY 说明鼠标上边放不下提示框
                if (boxHeight > pointY) {
                  y = 5
                } else { // 上边放得下
                  y = pointY - boxHeight
                }

                return [x, y]
              },
              formatter: function(params) {
                console.log(2212121)

                var infos = data.filter((item, index) => {
                  if (item.PsAlias === params.name) {
                    self.currentIndex = index
                    return true
                  }
                })[0]
                console.log(999888, infos)
                if (infos != undefined) {
                  self.$parent.setQualityData && self.$parent.setQualityData(infos.Qualitys, infos.PsAlias)
                  var bgClass = ''
                  if (infos.IsOnline == '0') {
                    bgClass = 'mapbox-re'
                  } else { bgClass = 'mapbox-bl' }

                  var color1 = [
                    { name: 'gr', color: '#00E400' },
                    { name: 'yel', color: '#FFFF00' },
                    { name: 'or', color: '#FF7E00' },
                    { name: 'red', color: '#FF0000' },
                    { name: 'pu', color: '#99004C' },
                    { name: 'hh', color: '#7E0023' }
                  ]
                  var colorcss1 = ''
                  switch (true) {
                    case infos.IsOnline == '0':
                      colorcss1 = color.filter(item => item.name === 'red')[0].color
                      break
                    default:
                      colorcss1 = color.filter(item => item.name === 'gr')[0].color
                      break
                  }

                  var tipHtml = '<div class="mapbox-pop ' + bgClass + '" onclick="window.location.href=\'./PointMonitor/SingleEnterpriseMonitor?PSCode=' + infos.PSCode + '\'">' +
                                    '<h6 style="color:' + colorcss1 + ';"> ' + (infos.PsAlias.length > 10 ? (infos.PsAlias.substring(0, 10) + '...') : infos.PsAlias) + '</h6>' +
                                    '<div class="gis-data">' +
                                    '<p>关注程度：' + infos.AttentionDegreeName + '</p>' +
                                    '<p>点位数：' + infos.PointCount + '</p>' +
                                    '<br />' +
                                    '<p>监测设备：' + (infos.EquipmentCount || 0) + '</p>' +
                                    '<p>是否在线：' + (infos.IsOnline == '1' ? '是' : '否') + '</p>' +
                                    '</div>' +
                                    '<div class="gis-data" style="border-bottom: 0; padding-top:0;">' +
                                    '<p>更新时间：' + (infos.ProductionDateStr || '') + '</p>' +
                                    '</div>' +
                                    '</div >'
                  // tipHtml += params.name + '<br>' + params.value + "单位";
                  return tipHtml
                }
                return ''
              }
              // triggerOn: 'click',
            }
            // itemStyle: {
            //   normal: {
            //     color: color.filter(item => item.name === colorcss)[0].color
            //     // shadowBlur: 0,
            //     // shadowColor: '#333'
            //   }
            // },
            // zlevel: 2
          },
          {
            type: 'lines',
            coordinateSystem: 'bmap',
            data: busLines,
            polyline: true,
            lineStyle: {
              color: 'orange',
              opacity: 0.6,
              width: 2
            }
          }
        ]
      }
      option && myChart.setOption(option)
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
      const img = '@/assets/marker.png'
      var myIcon = new BMap.Icon(pointImg, new BMap.Size(15, 15))
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
