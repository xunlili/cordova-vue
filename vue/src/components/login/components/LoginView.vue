<template>
    <div>
      <i class="iconfont">&#xe65e;</i>
      <el-input class="account" v-model="account" :placeholder="$t('login.LoginView.acc_placeholder')"></el-input>
      <i class="iconfont">&#xe627;</i>
      <el-input class="password" v-model="password" :placeholder="$t('login.LoginView.pass_placeholder')"></el-input>
      <i class="iconfont icon-down">&#xe638;</i>
      <div class="lang">
        <span class="title">{{$t('login.LoginView.langSelect_title')}}</span>
        <el-select v-model="value" :focus="true">
          <el-option
          :focus="true"
            v-for="item in $t('login.LoginView.langSelect')"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <el-button class="login-in" type="success" round>{{$t('login.LoginView.login_in')}}</el-button>
    </div>
</template>
<script>
export default {
  name: 'LoginView',
  data () {
    return {
      account: '',
      password: '',
      value: 'cn'
    }
  }
}
</script>
<style lang="scss">
  .el-input__inner{
    background: rgb(94, 53, 190);
    border-radius: 25px;
    border: none;
    opacity:0.8;
    color: rgb(231, 228, 228);
    height: 50px;
  }
  i{
    position: relative;
    left: 120px;
    top: 35px;
    font-size: 20px !important;
    z-index: 10;
    color: rgb(226, 223, 223)
  }
  .login-in{
    width: 100%;
    margin-top: 20px;
    height: 50px;
  }
  .el-button.is-round{
    border-radius: 25px;
  }
  .lang{
    // margin-top: 20px;
    width: 100%;
    .title{
      margin-top: 0px;
      height: 50px;
      line-height: 50px;
      display: inline-block;
      width: 60px;
      font-size: 14px;
      background: rgb(94, 53, 190);
      border-radius: 25px 0 0 25px;
      color: rgb(226, 223, 223);
    }
    .el-input__inner {
      border-radius: 0 25px 25px 0;
      height: 50px;
    }
    .el-select{
      height: 50px;
      display: inline-block;
      width: 78%;
    }
  }
  .el-select-dropdown{
    background: rgb(94, 53, 190);
  }
  .el-select-dropdown__item{
    color: #fff;
  }
  .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
    background: rgb(94, 53, 190);
  }
  .icon-down{

  }
  
</style>
