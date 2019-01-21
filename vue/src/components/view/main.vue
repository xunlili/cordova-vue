<template>
  <div>
    <router-view/>
    <Tabbar />
  </div>
</template>
<script>
import Tabbar from './Tabbar/Tabbar.vue'
export default {
  components: {
    Tabbar
  }
}
</script>
<style>

</style>
