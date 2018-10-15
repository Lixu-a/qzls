<template>
	<div class="building">
	<!-- 条件筛选 -->
		<div class="condition-filter public-container">
			<div class="filter-title">
				<i><span>条件筛选</span></i>
			</div>
		<!-- 区域 城市-->
			<div class="region">
		        <div class="region-title">
	                <em>区域</em>
	                <a @click="setcityflag($event)" 
	                	:class="{'active':cityflag==-1}"  
	                	href="javascript:void(0)" 
	                	name="city"  
	                	data-cityflag="-1">不限</a>
		        </div>
                <p class="citys">
                	<a v-for="(item,index) in citys" :key="index" 
                		@click="setcityflag($event)" 
                		:class="{'active':cityflag==index}" 
                		href="javascript:void(0)" 
                		name="city" 
                		:data-cityflag="index">{{item.city}}</a>
                </p>
            </div>
        <!-- 价格 钱-->
		        <div class="price">
			        <div class="price-title">
		                <em>价格</em>
		                <a @click="setmoneyflag($event)" 
		                	:class="{'active':moneyflag==-1}" 
		                	href="javascript:void(0)" 
		                	name="money"
		                	data-moneyflag="-1">不限</a>
			        </div>
		            <p class="moneys">
		            	<span v-for="(item,index) in moneys" :key="index">
		            		<a @click="setmoneyflag($event)" 
		            			:class="{'active':moneyflag==index}" 
		            			href="javascript:void(0)" 
		            			name="money" 
		            			:data-moneyflag="index">{{item.money}}</a>
		            	</span>
		            </p>
		        </div>
	    <!-- 户型 房间-->
	        <div class="house-type">
		        <div class="house-type-title">
	                <em>户型</em>
	                <a @click="setroomflag($event)" 
	                	:class="{'active':roomflag==-1}" 
	                	href="javascript:void(0)" 
	                	name="room" 
	                	data-roomflag="-1">不限</a>
		        </div>
	            <p class="rooms">
	            	<span v-for="(item,index) in rooms" :key="index">
	            		<a @click="setroomflag($event)" 
	            			:class="{'active':roomflag==index}" 
	            			href="javascript:void(0)" 
	            			name="room" 
	            			:data-roomflag="index">{{item.room}}</a>
	            	</span>
	            </p>
	        </div>
        </div>
        <!-- 排序 -->
        <div class="sorting public-container">
		    <ul class="sorting-list">
		        <!-- id="sort"  -->
		        <li name="default" class="defaultsort" 
		        	:class="{'sort':sort==0}" 
		        	@click="setdefault()">默认排序</li>
		        <li  name="pricesort" class="pricesort"><span :class="[sort==1?'sort':'']" class="pricesort-hover">{{pricesortText}}</span>
			        <div class="sort-select" style="display:none">
			            <span  value="1" class="ltg" @click="ltg()">低到高</span>
			            <span  value="2" class="gtl" @click="gtl()">高到低</span>
			        </div>
		        </li>
		        
		        <!-- <li name="area" class="areasort">面积排序</li> -->
		    </ul>
		    <span class="sortnum" v-if="listItem.length">共为您找到 <i>{{oldlistItem.length}}</i> 个楼盘信息</span>
		</div>
        <!-- 房子信息列表 -->
        <div class="public-container" style="position:relative;">
        	<div style="width:880px;" v-for="(item,index) in listItem.slice(0,5)" :key="index">
	       		<listItem :listItem="item"></listItem>
	       	</div>
	       	<!-- 右边推荐列表 -->
		    <div class="recommend">
		    	<div class="title">
		    		<em>
		    			<span>热门</span>推荐
		    		</em>
		    	</div>
		    	<keep-alive>
			    	<ul class="recommendList">
			    		<li v-for="(item, index) in recommendItem.slice(0,4)">
			    			<router-link v-bind="{to:'/recommendDetail/'+item.id}" v-if="!$route.meta.keepAlive">
			    			<!-- <router-link to="/home"> -->
			    				<img v-lazy="item.image" alt="">
			    				<span>{{item.title}}</span>
			    			</router-link>
			    		</li>
			    	</ul>
			    </keep-alive>
		    </div>
        </div>
       
	    <!-- 暂无更多 -->
       	<div class="public-container">
	       	<div v-if="!listItem.length"  style="width: 880px;height: 30px;line-height:30px;background: #FFF;margin-bottom: 20px;border-radius: 3px;
	       	color:#FC8C49">
	       		暂无更多
	       	</div>
	       	<div v-if="oldlistItem.length"  style="width: 880px;height: 30px;line-height:30px;margin-bottom: 20px;border-radius: 3px;
	       	color:#FC8C49">
		       	<el-pagination
				  background
				  @current-change="handleCurrentChange"
				  layout="prev, pager, next"
				  :total="oldlistItem.length">
				</el-pagination>
			</div>
	    </div>
	    
	</div>
</template>

<script>
//工具函数

// 列表数据
import listItem from "../components/list-item"
	export default{
		name:'building',
		components:{
			listItem
		},
		data() {
			return {
				cityflag:-1,
				moneyflag:-1,
				roomflag:-1,
				sort:0,
				pricesortText:"价格排序",
				citys:[
					{"city":"惠安市"},
					{"city":"晋江市"},
					{"city":"石狮市"},
					{"city":"南安市"},
					{"city":"永春县"},
					{"city":"德化县"},
					{"city":"洛江区"},
					{"city":"泉港区"},
					{"city":"鲤城区"},
					{"city":"安溪县"},
					{"city":"丰泽区"},
					{"city":"金门县"},
					],
				moneys:[
					{"money":"4000以下"},
					{"money":"4000-6000"},
					{"money":"6000-8000"},
					{"money":"8000-10000"},
					{"money":"10000-12000"},
					{"money":"12000-14000"},
					{"money":"14000-16000"},
					{"money":"16000-18000"},
					{"money":"20000以上"},
					],
				rooms:[
					{"room":"一室"},
					{"room":"两室"},
					{"room":"三室"},
					{"room":"四室"},
					{"room":"五室"},
					{"room":"六室"},
					{"room":"七室"},
					{"room":"公寓"},
					{"room":"复式"},
					{"room":"别墅"},
					{"room":"其他"},
					],
				reqlistItem:[],//从数据库请求的数据
				oldlistItem:[],
				listItem:[],
				recommendItem:[]
			}
		},
		mounted() {
			//等有后台请求的数据
			this.axios.get("/static/lib/list.json").then(res=>{
				this.reqlistItem = Object.assign([],res.data.result);
				this.oldlistItem=Object.assign([],res.data.result);
				this.listItem=res.data.result.slice(0,10);
				//把获取到的数据在vuex的reqlistItem也存一份
				this.$store.commit('add',res.data.result);
			});
			//获取推荐列表信息
			this.recommendItem = this.$store.state.recommendItem;
		},
		methods:{
			// 设置点击改变激活状态
			setcityflag(e) {
				var cityflag = e.target.dataset.cityflag;
				if (cityflag>-1) {
					if (cityflag==this.cityflag) {return;}//避免重复点击请求数据
					console.log(this.citys[cityflag].city);
					// let region = this.citys[cityflag].city;
					// // 点击区域进行筛选
					// this.listItem = this.oldlistItem.filter(function(item){
					// 	return item.region == region;
					// });
				}else{
					console.log("不限");
				}
				this.cityflag = cityflag;
				
			},
			setmoneyflag(e) {
				var moneyflag = e.target.dataset.moneyflag;
				if (moneyflag>-1) {
					if (moneyflag==this.moneyflag) {return;}//避免重复点击请求数据
					console.log(this.moneys[moneyflag].money);
				}else{
					console.log("不限");
				}
				this.moneyflag = moneyflag;
			},
			setroomflag(e) {
				var roomflag = e.target.dataset.roomflag;
				if (roomflag>-1) {
					if (roomflag==this.roomflag) {return;}//避免重复点击请求数据
					console.log(this.rooms[roomflag].room);
				}else{
					console.log("不限");
				}
				this.roomflag = roomflag;
			},
			// 排序
			setdefault() {
				this.sort = 0;//激活状态
				this.pricesortText = "价格排序";
				this.listItem=Object.assign([],this.reqlistItem);//设置默认
			},
			ltg() {
				this.sort = 1;
				this.pricesortText = "低到高";
				this.oldlistItem.sort(function(a, b) {
						var aa = a['price'];
						var bb = b['price'];
						return aa - bb;
				});
				this.listItem=this.oldlistItem.slice(0,10);
				// this.$refs.ltg.getBoundingClientRect();
				// 滚动条滚动
				// this.$nextTick(() => {
					document.documentElement.scrollTop=380;
				// });
			},
			gtl() {
				this.sort = 1;
				this.pricesortText = "高到低";
				this.oldlistItem.sort(function(a, b) {
						var aa = a['price'];
						var bb = b['price'];
						return bb - aa;
				});
				this.listItem=this.oldlistItem.slice(0,10);
				// 滚动条滚动
				this.$nextTick(() => {
					document.documentElement.scrollTop=380;
				});
			},
			// 打印当前页码---分页码
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				let a = val;
		        this.listItem=this.oldlistItem.slice(a*10-10,a*10);
		        // 滚动条滚动
				this.$nextTick(() => {
					document.documentElement.scrollTop=380;
				});
		    }
		}
	}
</script>

<style scoped>
.now{
	border: 1px solid red;
}
	.building{

	}
	.condition-filter{
		text-align: left;
	}
	.condition-filter .filter-title {
	    border-bottom: 2px solid rgba(252, 113, 29, 0.8);
	    background: #f5f7fa;
	    width: 1200px;
	    margin: auto;
	    /*padding-top: 25px;*/
	}
	.condition-filter .filter-title i{
		content:"";
	    width: 120px;
	    height: 35px;
	    display: block;
	    line-height: 37px;
	    font-size: 20px;
	    color: #fff;
	    font-weight: 600;
	    text-indent: 26px;
	    border-radius: 3px 0 0 0;
	    /*background: #f8f8f8;*/
	    border-bottom: 35px solid rgba(252, 113, 29, 0.8);
	    border-left: 0px solid transparent;
	    border-right: 40px solid transparent;
	    position: relative;
	}
	.condition-filter .filter-title i span{
		position: absolute;
		left: 0;
		top: 36px;
		font-style: normal;
	}
	/*区域*/
	.region,
	.price,
	.house-type{
		padding: 10px 0;
		background-color: #fff;
		box-shadow: 6px 6px 10px  rgba(0,0,0,.1);
		overflow: auto;
	}
	.region-title,
	.price-title,
	.house-type-title{
	    width: 145px;
	    float: left;
	    text-align: center;
	    display: block;
	    margin-top: 4px;
	}
	.region-title em,
	.price-title em,
	.house-type-title em{
	    font-size: 14px;
	    color: #333;
	    font-weight: 600;
	    position: relative;
	    top: 17px;
	    font-style: normal;
	}
	.region-title a,
	.price-title a,
	.house-type-title a{
	    font-size: 14px;
	    margin: 10px;
	    position: relative;
	    top: 17px;
	    left: 16px;
	    padding: 5px 6px;
	    border-radius: 3px;
	    color: #333;
	}
	.citys,
	.moneys,
	.rooms{
		display: block;
	    margin-bottom: 15px;
	    width: 1040px;
	    float: left;
	}
	.citys a,
	.moneys a,
	.rooms a{
		display: inline-block;
		padding-top: 10px;
	    height: auto;
	    margin: 0 auto;
	    left: 50px;
	    padding: 5px 10px 5px 10px;
	    border-radius: 3px;
	    color: #737373;
	    margin-left:10px; 
	}
	.citys a:hover,
	.region-title a:hover,
	.moneys a:hover,
	.price-title a:hover,
	.rooms a:hover,
	.house-type-title a:hover{
		background-color: #FC8C49;
		color: #fff;
	}
	/*active*/
	.active{
		background-color: #FC8C49;
		color: #fff !important;
	}
	/*排序*/
	.sorting{
		background-color: #fff;
		/*overflow: auto;*/
		height: 50px;
		margin-top: 25px;
	}
	.sorting .sorting-list{
		display: inline-block;
		font-size: 0;
		float: left;
	}
	.sorting .sorting-list li{
		display: inline-block;
		width: 110px;
	    height: 50px;
	    float: left;
	    text-align: center;
	    line-height: 50px;
	    font-size: 14px;
	    cursor: pointer;
	}
	.sorting .sorting-list li:nth-child(1){
		/*margin-left: -40px;*/
	}
	.sorting .sorting-list .pricesort{
		position: relative;
	}
	.sorting .sorting-list .pricesort:hover .sort-select{
		display: block !important;
	}
	.sorting .sorting-list .pricesort .sort-select{
		width: 110px;
	    overflow: hidden;
	    position: absolute;
	    top: 45px;
	    left: 0px;
	    background: #FFF;
	    z-index: 1;
	}
	.sorting .sorting-list .pricesort .sort-select span{
		display: block;
	}
	.sorting .sorting-list .pricesort .sort-select span:hover{
		color: #fc8c49;
		background-color: rgba(252,113,29,0.16);
	}
	.sorting .sortnum{
		font-size: 14px;
	    color: #666;
	    float: right;
	    display: block;
	    line-height: 50px;
	    margin-right: 60px;
	    font-style: normal;
	}
	.sorting .sortnum i{
		font-size: 18px;
	    color: #fc8c49;
	    font-style: normal;
	}
	.sort {
	    color: #fc8c49 !important;
	}
	/*右边推荐列表*/
	.building .recommend{
		width: 303px;
		overflow: hidden;
		position: absolute;
		top: 0;
		right:0px;
		background-color: #fff;
		text-align: left;
	}
	.building .recommend .title{
		height: 30px;
	    line-height: 30px;
	    padding: 0 25px;
	    margin-top: 10px;
	}
	.building .recommend .title em{
		font-size: 18px;
	    color: rgb(254, 112, 26);
	    font-weight: 600;
	    font-style: normal;
	}
	.building .recommend .title em span{
		color: #333;
	}
	.building .recommend .recommendList{
		margin-top: 10px;
    	overflow: hidden;
    	padding-left:15px; 
	}
	.building .recommend .recommendList li{
		width: 130px;
	    height: 100px;
	    float: left;
	    margin-right: 12px;
	    position: relative;
	    margin-bottom: 10px;
	}
	.building .recommend .recommendList li img{
		width: 100%;
		height: 100%;
	}
	.building .recommend .recommendList li img:hover{
		/*filter: blur(1px);*/
		box-shadow: 0px 0px 10px  rgba(0,0,0,.6);
	}
	.building .recommend .recommendList li span{
		display: block;
	    width: 100%;
	    height: 30px;
	    position: absolute;
	    bottom: 0;
	    background: rgba(160, 125, 96, 0.7);
	    font-size: 13px;
	    color: #FFF;
	    text-align: center;
	    line-height: 30px;
	}
</style>