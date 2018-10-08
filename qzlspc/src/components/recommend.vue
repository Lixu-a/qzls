<template>
	<div class="recommend">
		<div class="recommend-main">
			<div class="image">
				<router-link :to="{path:'/recommendDetail/'+listItem.id}">
					<img src="/static/images/house.jpg" alt="">
				</router-link>
				<div class="address">
					<i></i>
					<em>【{{listItem.region}}】{{listItem.address}}</em>
				</div>
			</div>
			<div class="footer">
				<div class="price">价格：<em style="color:#FE701A;font-size:22px;">{{listItem.price}}元</em></div>
				<div class="area">面积：{{listItem.area}}㎡</div>
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
		width:300px
		height:308px
		padding:30px 0 15px
		display:inline-block
		.recommend-main
			width:100%
			height:100%
			box-shadow: 0px 0px 10px  rgba(0,0,0,.5);
			border-radius:6px
			border:10px solid #fff
			&:hover
				box-shadow: 0px 0px 15px  rgba(0,0,0,.8);
			.image
				width:100%
				height:240px
				position:relative
				overflow:hidden
				cursor: pointer
				img
					width:100%
					height:100%
					transition:all 1s
					&:hover
						transform:scale(1.2)
				.address
					position:absolute
					bottom:10px
					// background-color:rgba(0,0,0,0.1)
					white-space: nowrap;
					text-align:left
					i
						display:inline-block
						width:20px
						height:20px
						background:url(../assets/images/position.png) no-repeat
						background-size:100% 100%
						z-index:100
					em
						display:inline-block
						font-style:normal
						color:#fff
						width:260px
						white-space: nowrap;
						overflow:hidden
						text-overflow: ellipsis
						
			.footer
				width:100%
				height:60px
				text-align:left
				font-size:17px
				.price
					margin:5px 0 5px 10px
				.area
					margin:5px 0 5px 10px
						
					
			
</style>