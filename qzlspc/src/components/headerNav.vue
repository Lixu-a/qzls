  <template>
	<div class="headerNav">
		<el-menu
		:default-active="$route.path"
		class="el-menu-demo"
		mode="horizontal"
		@select="handleSelect"
		background-color="#F7F7F7"
		text-color="#000"
		active-text-color="#FE701A"
		router>
			<el-menu-item index="/home">首页</el-menu-item>
			<el-menu-item index="/building">楼盘</el-menu-item>
			<el-menu-item index="/news">热点资讯</el-menu-item>
		</el-menu>
		<div class="logo">
			<router-link to="/home">
				<img src="../assets/images/logo.png" alt="">
			</router-link>
			<router-link to="/home">
				<div class="title">泉州楼市</div>
			</router-link>
		</div>
	</div>
</template>

<script>
  export default {
  	name:"headerNav",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods:{
    	handleSelect() {

    	}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.headerNav{
		position: relative;
	}
	.el-menu-demo {
		padding: 0 300px 0 400px;
		box-shadow: 0px 0px 10px rgba(0,0,0,.3);
		min-width: 1200px;
		position: relative;
	}
	.el-menu-demo .el-menu-item{
		font-size: 20px;
	}
	/*修改样式*/
	.el-menu--horizontal{
		border-bottom: none;
	}
	.logo{
		position: absolute;
		left: 200px;
		top: 0px;
		display: flex;
	}
	.logo img{
		margin-top: 6px;
		width: 50px;
		height: 50px;
	}
	.logo .title{
		font-size: 1.65rem;
		line-height: 60px;
		font-weight: bold;
	}
	.logo a{
		color: #2C3E50;
	}
</style>
