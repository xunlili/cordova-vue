<template>
  <div class="tabberWarp">
    <div class="warp">
      <Item
        :txt="item.txt"
        :page="item.page"
        @change="getVal"
        :key="index"
        v-for="(item, index) in tabbarDes"
        :sel="selected"
      >
        <i :class="[item.iconClass, 'iconfont']" slot="normalImg"></i>
        <i :class="[item.iconClass, 'iconfont', 'iconActive']" slot="activeImg"></i>
      </Item>
    </div>
  </div>
</template>
<script type="text/javascript">
import Item from './Item.vue'
export default {
  name: 'Tabbar',
  components: {
    Item
  },
  data: function () {
    return {
      selected: 'skin',
      tabbarDes: [
        {
          txt: '密码',
          page: 'content/password',
          iconClass: 'icon-mima'
          // normalImg:require('../assets/images/zz_07.jpg'),
          // activeImg:require('../assets/images/22_03.jpg')
        },
        {
          txt: '生日',
          page: 'content/brithday',
          iconClass: 'icon-zhanghao'
          // normalImg:require('../assets/images/download_skin_ic.png'),
          // activeImg:require('../assets/images/112_26.jpg')
        },
        {
          txt: '我的',
          page: 'content/personal',
          iconClass: 'icon-zhanghao'
          // normalImg:require('../assets/images/zz_09.jpg'),
          // activeImg:require('../assets/images/icon2_03.jpg')
        }
        // {
        //   txt: '账号',
        //   page: 'account'
        //   // normalImg:require('../assets/images/zz_11.jpg'),
        //   // activeImg:require('../assets/images/cion_03.jpg')
        // },
        // {
        //   txt: '设置',
        //   page: 'setup'
        //   // normalImg:require('../assets/images/zz_13.jpg'),
        //   // activeImg:require('../assets/images/22_03.jpg')
        // }
      ]
    }
  },
  mounted () {
    this.defActive()
  },
  methods: {
    defActive () {
      let arr = this.$route.path.split('/')
      let path = arr[1] + '/' + arr[2]
      console.log(path)
      this.getVal(path)
    },
    getVal (res) {
      this.selected = res
    }
  }
}
</script>
<style type="text/css">
.warp {
  width: 100%;
  border-top: 1px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 0;
}
.warp i {
  display: inline-block;
  width: 20px;
  height: 20px;
}
.tabberWarp i {
  margin-top: 10px;
  margin-bottom: 5px;
}
.iconActive{
  color: blue;
}
.tabberWarp {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 5px;
  background: #fff;
}
</style>
