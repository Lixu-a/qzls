<template>
	<div class="home">
		<broadcast :imgurl= "imgurlN"></broadcast>
		<div class="hotTitle public-container">
			热门推荐
		</div>
		<div class="recommend-wrap public-container">
			<div class="recommendItem" v-for="(item,index) in recommendItem">
				<recommend :listItem="item"></recommend>
			</div>
		</div>
		<div class="more public-container">
			<router-link to="/building">查看更多</router-link>
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
		padding: 15px 0 15px;
	}
	.recommendItem{
		display: inline-block;
		margin: 0 50px 30px 50px;
	}
	.home .hotTitle{
		height: 50px;
		line-height: 50px;
		margin-top: 30px;
		margin-bottom: 30px;
		color: #666;
		font-size: 34px;
    	font-weight: 700;
	}
	.home .more{
		background-color: #fff;
		height: 50px;
		line-height: 50px;
		margin-bottom: 30px;
		cursor: pointer;
	}
	.home .more a{
		color: #666;
	}
</style>