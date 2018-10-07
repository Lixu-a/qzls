<template>
	<div class="recommend">
		<div class="recommend-main">
			<div class="image">
				<img src="/static/images/house.jpg" alt="">
				<div class="address">
					<img src="" alt="">
					<span class="title">标题</span>
					<em class="address">地址</em>
				</div>
			</div>
			<div class="footer">
				<div class="price">价格</div>
				<div class="area">面积</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'recommend',
		props:{
			listItem:{
				type:Object
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.recommend
		width:100%
		height:100px
		padding-top:100px
		.recommend-main
			width:300px
			height:300px
			background-color:orange
			.image
				width:100%
			
</style>