<template>
  <div id="app">
    <!-- 头部导航 -->
    <headerNav :islogin="islogin"></headerNav>
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
    }
  },
  methods:{

  },
  mounted() {
    
  }
}
</script>

<style>
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
</style>
