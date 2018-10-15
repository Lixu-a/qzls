<template>
  <div id="app">
    <!-- 头部导航 -->
    <headerNav :islogin="islogin" :nickname="nickname"></headerNav>
    <router-view/>
    <footerNav></footerNav>
  </div>
</template>

<script>
import headerNav from './components/headerNav'
import footerNav from './components/footerNav'
export default {
  name: 'App',
  components: {
        footerNav,
        headerNav
  },
  data() {
    return {
      
    }
  },
  computed:{
    //判断是否有登录标志islogin
    islogin() {
      return this.$store.state.islogin;
    },
    nickname() {
      return this.$store.state.nickname;
    }
  },
  methods:{

  },
  mounted() {
    //初始化islogin为false，表示未登录
    let flag = false;
    this.$store.commit("login",flag);
  }
}
</script>

<style>
  ul{
    padding: 0;
    margin: 0;
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  em{
    font-style: normal;
  }
 /* img{
    background-color:rgba(0,0,0,0.1); 
  }*/
  img[lazy="loading"]{
    
  }
  .public-container{
    width: 1200px;
    min-width: 1200px;
    margin: 0px auto;
  }
  html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 1200px;
    font-family: Arial,Helvetica,微软雅黑,;
  }
  #app {
    width: 100%;
    background-color: #F8F8F8;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
  }
  /*修改element-ui默认分页颜色*/
  .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #FC8C49 !important;
      color: #fff;
  }
  /*user.vue标签页颜色*/
  .user .el-tabs__item.is-active{
    color: #FE701A !important;
  }
  .user .el-tabs__active-bar{
    background-color: #FE701A !important;
  }
  .user .el-tabs__item:hover{
    color: #FE701A !important;
  }
  .user .el-tabs__item{
    font-size: 16px;
  }
  /*清除elementui默认样式*/
  .edit-exhi .el-radio__input.is-checked .el-radio__inner {
    border-color: #FE701A;
    background: #FE701A;
  }
  .edit-exhi .el-radio__input.is-checked+.el-radio__label {
    color: #FE701A;
  }
</style>
