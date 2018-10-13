<template>
	<div class="user public-container">
		<!-- 左边选项卡 -->
		<div class="tab">
			<div class="head">
				<img src="/static/images/default-avatar.png" alt="">
			</div>
			<div class="nickname">
				欢迎您，我的昵称
			</div>
			<ul class="tabPanel">
				<li class="home">首页</li>
				<li class="collection">我的收藏</li>
				<li class="edit">编辑资料</li>
				<li class="exit" @click="exit()">退出登录</li>
			</ul>
		</div>
		<!-- 右边面板 -->
		<div class="exhibition">
			<div class="head-exhi">
				这里是展示区域
			</div>
			<div class="home-exhi">
				
			</div>
			<div class="collection-exhi">
				
			</div>
			<div class="edit-exhi">
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'user',
		methods:{
			exit() {
				let flag = false
				this.$store.commit('login',flag);
				this.$router.push("/login");
				console.log("退出登录");
			}
		}
	}
</script>

<style scoped>
	.user{
		margin-top: 36px;
		margin-bottom: 36px;
		display: flex;
	}
	.tab{
		width: 150px;
		background-color: #fff;
		border: 1px solid #e6e5e5;
		border-radius: 3px;
		box-shadow: 0px 0px 20px  rgba(0,0,0,.1);
	}
	.user .head{
		width: 100%;
		height: 80px;
		margin-top: 30px;
	}
	.user .head img{
		width: 80px;
		height: 80px;
	}
	.user .nickname{
		width: 130px;
		margin: 0 auto;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-top: 10px;
		font-weight: 600;
	}
	.user .tabPanel{

	}
	.user .tabPanel li{
		cursor: pointer;
		margin: 10px 0;  
	}
	/*这里是展示区域*/
	.exhibition{
		background-color: #fff;
		border-radius: 3px;
		width: 1000px;
		height: 500px;
		margin-left: 30px;
	}
</style>