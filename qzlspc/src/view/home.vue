<template>
	<div class="home">
		<broadcast :imgurl= "imgurlN"></broadcast>
		<router-view></router-view>
	</div>
</template>

<script>
import broadcast from '../components/broadcast'
	export default{
		name:'home',
		data(){
			return{
				imgurlN:['/static/images/banner.jpg','/static/images/banner.jpg']
			}
		},
		components:{
			broadcast
		}
	}
</script>

<style scoped>
	.home{
		width: 100%;
		height: 100%;
	}
</style>