<template>
	<div class="home">
		<broadcast :imgurl= "imgurlN"></broadcast>
		<recommend></recommend>
		<router-view></router-view>
	</div>
</template>

<script>
import broadcast from '../components/broadcast'
import recommend from '../components/recommend'
	export default{
		name:'home',
		data(){
			return{
				imgurlN:['/static/images/banner.jpg','/static/images/banner.jpg']
			}
		},
		components:{
			broadcast,
			recommend
		}
	}
</script>

<style scoped>
	.home{
		width: 100%;
		height: 100%;
	}
</style>