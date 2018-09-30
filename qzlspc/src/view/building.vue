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
	                <a @click="setcityflag($event)" :class="{'active':cityflag==-1}"  href="javascript:void(0)" name="city"  data-cityflag="-1">不限</a>
		        </div>
                <p class="citys">
                	<block v-for="(item,index) in citys" key="index">
                		<a @click="setcityflag($event)" :class="{'active':cityflag==index}" href="javascript:void(0)" name="city" :data-cityflag="index">{{item.city}}</a>
                	</block>
                </p>
            </div>
        <!-- 价格 钱-->
	        <div class="price">
		        <div class="price-title">
	                <em>价格</em>
	                <a :class="{'active':moneyflag==-1}" href="javascript:void(0)" name="money" data-moneyflag="-1">不限</a>
		        </div>
	            <p class="moneys">
	            	<block v-for="(item,index) in moneys" key="index">
	            		<a :class="{'active':moneyflag==index}" href="javascript:void(0)" name="money" data-moneyflag="index">{{item.money}}</a>
	            	</block>
	            </p>
	        </div>
        </div>
        <!-- 房子信息列表 -->
        <div class="list">
        	<ul>
        		<li></li>
        	</ul>
        </div>
	</div>
</template>

<script>
	export default{
		name:'building',
		data() {
			return {
				cityflag:0,
				moneyflag:-1,
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
					{"money":"4000以下"}
					]
			}
		},
		methods:{
			setcityflag(e) {
				this.cityflag = e.target.dataset.cityflag;
				// console.log(e.target.dataset.cityflag);
			}
		}
	}
</script>

<style scoped>
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
	    margin-top: 25px;
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
	    background: #f8f8f8;
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
	.price{
		padding: 10px 0;
		background-color: #fff;
		box-shadow: 6px 6px 10px  rgba(0,0,0,.1);
		overflow: auto;
	}
	.region-title,
	.price-title{
	    width: 145px;
	    float: left;
	    text-align: center;
	    display: block;
	}
	.region-title em,
	.price-title em{
	    font-size: 14px;
	    color: #333;
	    font-weight: 600;
	    position: relative;
	    top: 17px;
	    font-style: normal;
	}
	.region-title a,
	.price-title a{
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
	.moneys{
		display: block;
	    margin-bottom: 15px;
	    width: 1040px;
	    float: left;
	}
	.citys a,
	.moneys a{
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
	.price-title a:hover{
		background-color: #FC8C49;
		color: #fff;
	}
	/*active*/
	.active{
		background-color: #FC8C49;
		color: #fff !important;
	}
	/*房子信息列表*/
	.m_lp_list li {
	    width: 880px;
	    height: 241px;
	    background: #FFF;
	    margin-bottom: 20px;
	    border-radius: 3px;
	}
</style>