<template>
	<div class="home">
		<Broadcast :imgurl= "imgurlN"></Broadcast>
		<router-view></router-view>
		
	</div>
</template>

<script>
import Broadcast from '../components/Broadcast'
	export default{
		name:'home',
		data(){
			return{
				imgurlN:['static/images/banner.jpg','../../static/images/banner.jpg']
			}
		},
		components:{
			Broadcast
		}
	}
</script>

<style scoped>
	
</style>