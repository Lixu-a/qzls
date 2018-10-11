<template>
	<div class="dynamicDetail public-container">
		<div class="article">
			<div class="title">
				{{dynamic.title}}
			</div>
			<div class="item">
				<span>作者:{{dynamic.author}}</span>
				<span>{{dynamic.year}}-{{dynamic.date}}</span>
				<span>来源：{{dynamic.source}}</span>
			</div>
			<div class="content">
				{{dynamic.content}}
			</div>
			<div class="img">
				<img :src="dynamic.image" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'dynamicDetail',
		data() {
			return {
				dynamic:''
			}
		},
		computed:{
			id() {
				return this.$route.params.id;
			}
		},
		created() {
			//获取传入id对应的新闻数据
			let dynamicIndex = this.$store.state.dynamicTotal.findIndex((item) => {
				return item.id == this.id;
			});

			this.dynamic = this.$store.state.dynamicTotal[dynamicIndex];
		}
	}
</script>

<style scoped>
	.dynamicDetail{

	}
	.article{
		width: 890px;
		background-color: #fff;
		margin-top: 40px;
		margin-bottom: 60px;
		padding-bottom: 60px;
	}
	.article .title{
		text-align: center;
	    font-size: 26px;
	    color: #333;
	    padding-top: 30px;
	}
	.article .item{
		border-bottom: 1px solid #DFDFDF;
	    width: 720px;
	    height: auto;
	    margin: auto;
	    font-size: 12px;
	    color: #333;
	    line-height: 30px;
	    margin-top: 10px;
	}
	.article .item span{
		margin-left: 10px;
	}
	.article .content{
		text-indent: 30px;
		padding: 26px;
		text-align: left;
		line-height: 30px;
	}
	.article .img{
		
	}
	.article .img img{
		width: 600px;
	}
</style>