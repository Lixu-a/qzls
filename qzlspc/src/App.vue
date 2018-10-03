<template>
  <div id="app">
    <!-- 头部导航 -->
    <headerNav></headerNav>
    <router-view/>
  </div>
</template>

<script>
import headerNav from './components/headernav'
export default {
  name: 'App',
  components: {
        headerNav
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
  #app{
    background-color: #F8F8F8;
  }
  .public-container{
    width: 1200px;
    min-width: 1200px;
    margin: 20px auto;
  }
  body{
    margin: 0;
    font-family: Arial,Helvetica,微软雅黑,;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  /*修改element-ui默认分页颜色*/
  .el-pagination.is-background .el-pager li:not(.disabled).active {
      background-color: #FC8C49 !important;
      color: #fff;
  }
</style>
