<template>
  <div class="first-box">
    <div class="bgd">
      <div class="bgd-over">
        <p class="title">{{$t("login.login_title")}}</p>
        <el-tabs class="tabs" :stretch="true" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane class="tabs-login" :label='$t("login.login")' name="login">
            <LoginView />
          </el-tab-pane>
          <el-tab-pane class="tabs-regist" :label='$t("login.register")' name="register">
            <RegisterView />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import LoginView from './components/LoginView.vue'
import RegisterView from './components/RegisterView.vue'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeName: 'login'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  components: {
    LoginView,
    RegisterView
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .first-box{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url('../../assets/image/login/login-bgd.jpg');
    // color: #fff;

    .bgd::after{
      content: '';
      // background: rgba(43, 8, 170, 0.9);
      background: rgb(108, 59, 221);
      opacity:0.9;
      filter: blur(3px);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      overflow: hidden
    }
    .bgd-over{
      position: relative;
      z-index: 2;
    }
    .title{
      color: #fff;
      font-size: 30px;
      margin-top: 70px;
    }
    .tabs{
      width: 80%;
      margin: 0 auto;
      text-align: center;
      color: #fff;
    }
    .el-tabs__nav{
      width: 100% !important;
    }
    .el-tabs__item .is-active{
      color: #fff;
    }
    .el-tabs__item.is-active{
      color: #fff;
      font-size: 20px;
    }
    .el-tabs__item:hover{
      color: #fff;
      font-size: 20px;
    }
    .el-tabs__item{
      color: rgb(201, 199, 199);
    }
    .el-tabs__nav-wrap::after{
      display: none
    }
    .el-tabs__active-bar{
      display: none;
    }
    .el-tabs__item{
      font-size: 18px;
    }
  }
</style>
