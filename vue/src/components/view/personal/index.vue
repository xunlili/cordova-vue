<template>
  <div>
    个人中心
    <button @click="logout">退出登录</button>
  </div>
</template>
<script>
export default {
  name: 'password',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      console.log('退出登录')
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss">

</style>
