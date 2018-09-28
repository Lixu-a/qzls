import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import building from '@/view/building'
import news from '@/view/news'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: home},
    {path: '/home',component: home},
    {path: '/building',component: building},
    {path: '/news',component: news}
  ],
  mode:'history'
})
