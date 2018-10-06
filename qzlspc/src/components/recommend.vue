<template>
	<div class="recommend">
		<div class="recommend-main">
			<div class="image">
				<img src="/static/images/house.jpg" alt="">
				<div class="address">
					<img src="" alt="">
					<em>地址</em>
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
		background-color:red
</style>