<template>
	<div class="album">
		<div class="album-main public-container">
			<div class="album-header">
				<h2>房屋相册</h2>
			</div>
			<ul class="album-images">
				<li>
					<img src="" alt="">
				</li>
			</ul>
			<div class="album-footer">
				<span>展开</span>
				<span>收起</span>
				<img src="/static/images/unfold_ico.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'album'
	}
</script>

<style scoped>
	.album{
		width: 100%;
		padding: 60px 0;
	}
	.album-main{
		background-color: #fff;
		border-radius: 3px;
		height: 294px;
	}
</style>