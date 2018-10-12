<template>
	<div class="user">
		<el-button @click="exit()" type="primary">退出登录</el-button>
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
	
</style>