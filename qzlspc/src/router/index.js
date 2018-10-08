import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import building from '@/view/building'
import news from '@/view/news'
import detail from '@/view/detail'
import recommendDetail from '@/view/recommendDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: home},
    {path: '/building',component: building},
    {path: '/news',component: news},
    {path: '/detail/:id',name:'detail',component: detail},
    {path: '/recommendDetail/:id',
    name:'recommendDetail',
    component: recommendDetail, 
    meta: {
        keepAlive: true // 需要被缓存
    }}
  ],
  mode:'history'
})
