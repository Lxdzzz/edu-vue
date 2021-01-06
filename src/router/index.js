import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import qianyan from '@/pages/qianyan'
import internet from '@/pages/internet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/qianyan',
      name: 'qianyan',
      component: qianyan
    },
    {
      path: '/internet',
      name: 'internet',
      component: internet
    }
  ]
})
