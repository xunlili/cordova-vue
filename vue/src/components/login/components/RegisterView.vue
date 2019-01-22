<template>
  <div class="register-view">
    <el-input class="account" v-model="account" :placeholder="$t('login.LoginView.acc_placeholder')"></el-input>
    <el-input class="password" v-model="password" :placeholder="$t('login.LoginView.pass_placeholder')"></el-input>
    <el-button class="login-in" @click="register" type="success" round>{{$t('login.registerView.register')}}</el-button>
  </div>
</template>
<script>
import { registerApi } from '@/env/api.js'
export default {
  name: 'RegisterView',
  data () {
    return {
      account: 13265563579,
      password: '123456'
    }
  },
  async mounted () {
  },
  methods: {
    async register () {
      let reqObj = {
        account: this.account,
        password: this.password
      }
      const p = this.$http.post(registerApi, reqObj)
      try {
        let result = await p
        console.log(result)
        if (result) alert(this.$t('login.correct.registSucc'))
      } catch (err) {
        if (err.response.data.status === 4010) alert(this.$t('login.errorTips.sameClient'))
      }
    }
  }
}
</script>
<style lang="scss">
  .register-view{
    .account{
      margin-top: 22px;
    }
    .password{
      margin-top: 20px;
    }
    .el-input__inner{
      background: rgb(94, 53, 190);
      border-radius: 25px !important;
      border: none !important;
      opacity:0.8;
      color: rgb(231, 228, 228) !important;
      height: 50px !important;
    }
  }
  .login-in{
    width: 100%;
    margin-top: 20px !important;
    height: 50px;
  }
</style>
