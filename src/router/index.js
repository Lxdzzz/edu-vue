import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import qianyan from '@/pages/qianyan'
import internet from '@/pages/internet'
import findAllCls from '@/pages/findAllCls'
import index from '@/pages/index'
import AI from "@/pages/AI.vue";
import houtai from "@/pages/houtai.vue";
import Javakaifa from "@/pages/Javakaifa.vue";
import xinqu from "@/pages/xinqu.vue";
import yidong from "@/pages/yidong.vue";


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
    },
    {
      path: '/findAllCls',
      name: 'findAllCls',
      component: findAllCls
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/AI',
      name: 'AI',
      component: AI
    },
    {
      path: '/houtai',
      name: 'houtai',
      component: houtai
    },
    {
      path: '/Javakaifa',
      name: 'Javakaifa',
      component: Javakaifa
    },
    {
      path: '/xinqu',
      name: 'xinqu',
      component: xinqu
    },
    {
      path: '/yidong',
      name: 'yidong',
      component: yidong
    }
  ]
})
