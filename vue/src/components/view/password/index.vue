<template>
  <div>
    <div class="header">
      {{$t('login.passManage.title')}}
    </div>
    <div class="add-icon">+</div>
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
  }
}
</script>
<style lang="scss">
  .header{
    width: 100%;
    height: 70px;
    background: #705ed9;
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    line-height: 70px;
  }
  .add-icon{
    width: 50px;
    height: 50px;
    background: #3a1aec;
    border-radius: 25px;
    text-align: center;
    line-height: 50px;
    color: #fff;
    font-size: 50px;
    position: fixed;
    bottom: 100px;
    right: 50px;
  }
</style>
