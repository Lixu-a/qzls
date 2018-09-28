<template>
	<div class="block">
		<el-carousel trigger="click" height="450px" :interval="6000">
			<el-carousel-item v-for="(item,index) in imgurlC" :key="index">
<!-- 			    <img :src="item" alt=""> -->
			    <img :src="item" alt="">
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
	export default{
		props:{
			imgurlC:{
				type:Array
				// default:['../assets/banner.jpg','../assets/banner.jpg']
			}
		}
	}
</script>

<style>
  .el-carousel__item{
    background-color: #d3dce6;
  }
  .el-carousel__item img{
  	width: 100%;
  	height: 100%;
  }
</style>