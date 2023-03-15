<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <div class="logo">
          <!-- <img class="logoImg" src="./../../assets/logo.png"> -->
        </div>
        <h3 class="title">管道数据管理平台</h3>
        <!-- <h4 class="titleEnglish">automatic plotting system</h4> -->
      </div>
      <!--
      <el-form-item prop="orgcode">
        <el-cascader
          ref="elcascader1"
          v-model="loginForm.orgcode"
          :options="orgcodeList"
          :props="{ checkStrictly: true, expandTrigger: 'hover' }"
          placeholder="请选择组织机构"
          style="width: 100%;"
          clearable
          @change="changeVal1"
        />
      </el-form-item> -->
      <!-- 超管只能默认登录 -->
      <el-form-item prop="orgcode">
        <el-input
          ref="username"
          value="组织机构名"
          placeholder="组织机构"
          name="orgcode"
          type="text"
          tabindex="1"
          readonly
          autocomplete="on"
        />
      </el-form-item>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="账号"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <!-- <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span> -->
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;padding-top: 10px;"
        @click.native.prevent="handleLogin"
      >登录</el-button>
    </el-form>
  </div>
</template>

<script>
import { orgListAPI } from '@/api/user'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        orgcode: 'JLSJ', // 组织机构
        username: '', // 用户名
        password: '' // 密码
      },
      loginRules: {
        orgcode: [
          { required: true, message: '请选择组织机构', trigger: 'change' }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      passwordType: 'password', // 显示隐藏密码
      capsTooltip: false,
      loading: false, // 加载中
      redirect: undefined,
      otherQuery: {},
      orgcodeList: [] // 组织机构列表
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    this.getOrgList()
  },
  mounted() {
    // 监听窗口活动
    if (document.hidden !== undefined) {
      document.addEventListener('visibilitychange', this.checkState)
    }
    // 如果表单输入框为空，则自动聚焦
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  beforeRouteLeave(to, from, next) {
    document.removeEventListener('visibilitychange', this.checkState)
    next()
  },
  destroyed() {},
  methods: {
    // 登录状态管理
    checkState() {
      if (document.hidden) {
        return
      } else {
        if (this.userCode !== localStorage['ai-usercode']) {
          location.replace('/')
        }
      }
    },
    changeVal1() {
      this.$refs.elcascader1.dropDownVisible = false
    },
    // 获取组织机构
    getOrgList() {
      orgListAPI().then(res => {
        const data = res.Data
        const changeList = (arr) => {
          arr.forEach(v => {
            v.label = v.OrganizeName + '-' + v.OrganizeCode
            v.value = v.OrganizeCode
            if (v.children && v.children.length !== 0) {
              changeList(v.children)
            } else {
              delete v.children
            }
          })
        }
        changeList(data)
        this.orgcodeList = data
      })
    },
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && key >= 'A' && key <= 'Z'
    },
    // 显示密码
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    // 登录操作
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.loading = true
      //     this.$store
      //       .dispatch('user/login', this.loginForm)
      //       .then(() => {
      //         this.$router.push({ path: '/', query: this.otherQuery })
      //         this.loading = false
      //       })
      //       .catch(() => {
      //         this.loading = false
      //       })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    // 获取参数
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: #28356c;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 100%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #28356c;
      height: 47px;
      caret-color: #28356c;

      &:-webkit-autofill {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-text-fill-color: #28356c !important;
      }
    }
  }

  .el-form-item {
    border-bottom: 1px solid #dee1ee;
    background: #ffffff;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;

  .login-form {
    position: absolute;
    width: 400px;
    max-width: 100%;
    margin: 120px auto;
    overflow: hidden;
    left: 0;
    right: 0;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    padding-bottom: 40px;
    .logo {
      height: 150px;
      // margin-bottom: 11px;
      .logoImg {
        width: 200px;
        height: 200px;
        display: block;
        margin: 0 auto;
      }
    }

    .title {
      font-size: 18px;
      color: #28356c;
      margin: 0px auto 0 auto;
      text-align: center;
      font-weight: bold;
    }
    .titleEnglish {
      font-size: 12px;
      color: #767fa2;
      margin: 4px auto 0;
      text-align: center;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
