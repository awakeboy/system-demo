<template>
  <div class="navbar">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />

    <tags-view id="tagsview-container" class="tagsview-container" />

    <div class="right-menu">

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img src="./../../assets/avatar.png" class="user-avatar">
          <span class="user-name">{{ userCode }}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>我的桌面</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import TagsView from './TagsView'
import { removeToken } from '@/utils/auth'

export default {
  components: {
    Hamburger,
    TagsView
  },
  data() {
    return {
      userCode: ''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  created() {
    this.userCode = localStorage['ai-usercode'] || ''
  },
  mounted() {
    // 监听窗口活动
    if (document.hidden !== undefined) {
      document.addEventListener('visibilitychange', this.checkState)
    }
  },
  beforeRouteLeave(to, from, next) {
    document.removeEventListener('visibilitychange', this.checkState)
    next()
  },
  methods: {
    // 登录状态管理
    checkState() {
      // if (document.hidden) {
      //     return
      // } else {
      //   if (this.userCode !== localStorage['ai-usercode']) {
      //     location.replace('/')
      //   }
      // }
    },
    // 显示/隐藏左侧菜单
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    // 登出，重定向当前页面
    async logout() {
      // await this.$store.dispatch('user/logout')
      this.$router.push('/login')
      // if (!localStorage.getItem('ai-usertype')) {
      //   await this.$store.dispatch('user/logout')
      //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      // } else {
      //   removeToken()
      //   localStorage.clear()
      //   if (webBaseUrl.indexOf('8088') > 0) {
      //     location.replace('http://121.41.23.111:7076/')
      //   } else {
      //     location.replace('http://yun.jleec.com/')
      //   }
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 80px;
  padding-bottom: 4px;
  // overflow: hidden;
  position: relative;
  background: #F4F6F8;
  .hamburger-container {
    line-height: 80px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .tagsview-container {
    float: left;
    width: calc(100% - 320px);
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    max-width: 240px;
    height: 48px;
    margin-top: 16px;
    margin-right: 24px;
    background: #ffffff;
    border-radius: 30px;
    display: flex;
    align-items: center;

    &:focus {
      outline: none;
    }

    .avatar-container {
      margin-right: 30px;
      display: flex;
      align-items: center;

      .avatar-wrapper {
        position: relative;
        display: flex;
        align-items: center;

        .user-avatar {
          margin-left: 24px;
          cursor: pointer;
          width: 28px;
          height: 28px;
          border-radius: 10px;
        }
        .user-name{
          cursor: pointer;
          margin-left: 16px;
          color: #28356C;
          font-size: 14px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          margin-left: 8px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
