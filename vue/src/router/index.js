import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/components/login/Login')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/login/Login')
    },
    {
      path: '/content',
      name: 'content',
      component: () => import('@/components/view/main'),
      children: [
        {
          path: 'password',
          component: () => import('@/components/view/password')
        },
        {
          path: 'brithday',
          component: () => import('@/components/view/brithday')
        },
        {
          path: 'personal',
          component: () => import('@/components/view/personal')
        }
      ]
    }
  ]
})
