# AI供配电后台
提供给设计师、管理员的编辑后台

## 软件架构
1. Vue 2
2. Vuex
3. Vue Router
4. element ui

## 功能插件
1. echarts
百度图表
2. vue-baidu-map
百度地图-vue版本
3. vue-awesome-swiper
轮播图

## 兼容性
1. 主流浏览器的双核

## 运行项目
1. npm install
安装依赖
2. npm run serve
启动项目
3. npm run build:test / npm run build:prod
按照配置的环境打包到根目录的dist文件

## 注意事项
1. vue-awesome-swiper 需要使用 2.6.7 这类版本来兼容IE内核
2. vue.config.js中配置的兼容
transpileDependencies: ['vue-baidu-map', 'vue-awesome-swiper']


## 源码结构
1. ./public
配置index.html favicon.ico 以及引用的本地文件
2. ./src/api
接口封装的第二层
3. ./src/assets
本地静态资源
4. ./src/components
封装的组件
5. ./src/filters
全局过滤器
6. ./src/icons
分装的icons组件，以及组件依赖的图片资源
7. ./src/layout
布局组件，整体的架构
8. ./src/router
路由模块
9. ./src/store
Vuex 主要处理左侧菜单逻辑
10. ./src/styles
自定义样式
11. ./src/utils
封装的方法，按需引入
12. ./src/view
业务代码，根据路由对应所属业务
13. ./env.development
本地 环境变量配置
14. ./env.production
正式 环境变量配置
15. ./env.staging
本地 环境变量配置
16. ./address2.json ./address3.json
二级和三级地址文件

## 配置文件
1. 服务端接口域名配置
修改根目录下 .env 文件的 VUE_APP_BASE_API 值，重新运行项目
2. 编译配置
根目录 vue.config.js中有对编译的配置
3. eslint
根目录 eslintrc.js

## 维护
1. 接口维护
./src/api 接口封装的第二层：定义接口名称、请求路径、请求方法
./src/utils/request.js 接口封装第一层：可以设置axios实例中的接口域名、拦截处理和返回处理

## 源码修改
1. element-ui
   源码中： packages/image/src/image-viewer.vue
       zoomRate从0.015修改为0.05
       调换两个icon图标的出现顺序('el-icon-c-scale-to-original','el-icon-full-screen')