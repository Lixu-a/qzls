<template>
	<div class="home">
		<broadcast :imgurl= "imgurlN"></broadcast>
		<div class="recommend-wrap public-container">
			<div class="recommendItem" v-for="(item,index) in recommendItem">
				<recommend :listItem="item"></recommend>
			</div>
		</div>
		<div class="more public-container">
			查看更多
		</div>
		<router-view ></router-view>
	</div>
</template>

<script>
import broadcast from '../components/broadcast'
import recommend from '../components/recommend'
	export default{
		name:'home',
		data(){
			return{
				imgurlN:['/static/images/banner.jpg','/static/images/banner.jpg'],
				recommendItem:''
			}
		},
		components:{
			broadcast,
			recommend
		},
		mounted() {
			this.axios.get("/static/lib/list.json").then(res=>{
				//把获取到的推荐列表数据数据在vuex的recommendItem也存一份
				this.$store.commit('recommendItem',res.data.result);
				// 首页请求推荐列表数据
				this.recommendItem = res.data.result.slice(0,9); 
			})
		}

	}
</script>

<style scoped>
	.home{
		width: 100%;
		height: 100%;
	}
	.recommend-wrap{
		background-color: #fff;
		border-radius: 6px;
		margin: 30px auto;
		padding: 15px 0 30px;
	}
	.recommendItem{
		display: inline-block;
		margin: 0 30px;
	}
	.more{
		background-color: #fff;
		height: 60px;
		line-height: 60px;
		margin-bottom: 30px;
	}
</style>