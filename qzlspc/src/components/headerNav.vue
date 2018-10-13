  <template>
	<div class="headerNav">
		<div class="public-container" style="position:relative;">
			<el-menu
			:default-active="$route.path"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			background-color="#fff"
			text-color="#000"
			active-text-color="#FE701A"
			router>
			<!-- #F7F7F7 -->
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
			<div class="login">
				<router-link v-show="!islogin" to="/login">登录</router-link>
				<router-link v-show="islogin" to="/user">欢迎您，{{nickname}}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
  	name:"headerNav",
  	props:{
  		islogin:{
  			type:Boolean,
  			default:false
  		},
  		nickname:''
  	},
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods:{
    	handleSelect() {

    	}
    },
    mounted() {
    	console.log(this.islogin);
    	console.log(this.nickname);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.headerNav{
		position: relative;
		width: 100%;
		background-color: #fff;
		box-shadow: 0px 0px 10px rgba(0,0,0,.3);
		height: 60px;
	}
	.el-menu-demo {
		margin: 0 auto;
		position: absolute;
		left: 200px;
		top: 0;
	}
	.el-menu-demo .el-menu-item{
		font-size: 18px;
	}
	/*修改样式*/
	.el-menu--horizontal{
		border-bottom: none;
	}
	.logo{
		position: absolute;
		left: 0;
		top: 0;
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
		white-space: nowrap;
	}
	.logo a{
		color: #2C3E50;
	}
	.login{
		position: absolute;
		right: 20px;
		top: 0px;
		height: 60px;
		line-height: 60px;
	}
	.login a{
		color: #999;
		display: block;
		width: 100%;
		height: 100%;
		padding: 0 15px;
	}
</style>
