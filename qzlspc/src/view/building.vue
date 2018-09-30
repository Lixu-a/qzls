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
		                <a @click="setmoneyflag($event)" :class="{'active':moneyflag==-1}" href="javascript:void(0)" name="money" data-moneyflag="-1">不限</a>
			        </div>
		            <p class="moneys">
		            	<span v-for="(item,index) in moneys" key="index">
		            		<a @click="setmoneyflag($event)" :class="{'active':moneyflag==index}" href="javascript:void(0)" name="money" :data-moneyflag="index">{{item.money}}</a>
		            	</span>
		            </p>
		        </div>
	    <!-- 户型 房间-->
	        <div class="house-type">
		        <div class="house-type-title">
	                <em>户型</em>
	                <a @click="setroomflag($event)" :class="{'active':roomflag==-1}" href="javascript:void(0)" name="room" data-roomflag="-1">不限</a>
		        </div>
	            <p class="rooms">
	            	<span v-for="(item,index) in rooms" key="index">
	            		<a @click="setroomflag($event)" :class="{'active':roomflag==index}" href="javascript:void(0)" name="room" :data-roomflag="index">{{item.room}}</a>
	            	</span>
	            </p>
	        </div>
        </div>
        <!-- 房子信息列表 -->
        <div class="building-list public-container">
        	<ul>
        		<li>
        			<router-link to="/home">
        				<img src="/static/images/house.jpg" alt="">
        			</router-link>
        			<div class="building-message">
        				<div class="title">
        					何辉聚楼盘
        				</div>
        				<div class="phone-number">
        					<img src="../assets/images/phone.png" alt="">
        					<span>1008610086</span>
        				</div>
        				<div class="room-style">
        					户型：三室两厅一卫
        				</div>
        				<div class="address">
        					地址：泉州万达科技楼旁
        				</div>
        				<div class="Character">
        					<i>水景住宅</i>
        					<i>江景美宅</i>
        					<i>养生社区</i>
        				</div>
        			</div>
        			<div class="unit-price">
        				<i>8900</i><span>元/㎡</span>
        			</div>
        		</li>
        	</ul>
        </div>
	</div>
</template>

<script>
	export default{
		name:'building',
		data() {
			return {
				cityflag:-1,
				moneyflag:-1,
				roomflag:-1,
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
					{"money":"20000以上"}
					],
				rooms:[
					{"room":"一室一厅"},
					{"room":"两室一厅"},
					{"room":"三室一厅一卫"},
					{"room":"两室两厅"},
					{"room":"三室两厅"},
					{"room":"四室一厅"},
					{"room":"四室两厅"},
					{"room":"四室两厅三卫一厨"},
					{"room":"五室以上"},
					]
			}
		},
		methods:{
			setcityflag(e) {
				this.cityflag = e.target.dataset.cityflag;
			},
			setmoneyflag(e) {
				this.moneyflag = e.target.dataset.moneyflag;
			},
			setroomflag(e) {
				this.roomflag = e.target.dataset.roomflag;
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
	/*房子信息列表*/
	.building-list ul{
		/*font-size: 0;*/
	}
	.building-list ul li {
	    width: 880px;
	    height: 241px;
	    background: #FFF;
	    margin-bottom: 20px;
	    border-radius: 3px;
	    margin-left: -40px;
	    position: relative;
	}
	.building-list ul li a{
		display: block;
		width: 267px;
		height: 195px;
		padding-top: 22px;
		margin-left: 30px;
		float: left;
	}
	.building-list ul li a img{
		width: 100%;
		height: 100%;
		box-shadow: 6px 6px 10px  rgba(0,0,0,.1);
	}
	.building-list ul li .building-message{
		width: 540px;
		height: 194px;
		float: left;
		padding-top: 22px;
		margin-left: 26px;
		text-align: left;
	}
	.building-message .title{
	    height: 40px;
	    line-height: 40px;
	    font-size: 20px;
	    color: #333;
	    font-weight: 600;
	}
	.building-message .title:hover{
		color: #FC8C49;
	}
	.building-message .phone-number{
		margin-top: 10px;
	}
	.building-message .phone-number img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
	.building-message .phone-number span{
		font-size: 18px;
    	color: #627B9E;
    	font-weight: 600;
	}
	.building-message .room-style{
		margin-top: 15px;
		font-size: 14px;
    	color: #666;
	}
	.building-message .address{
		margin-top: 15px;
	    width: 220px;
	    font-size: 14px;
	    color: #666;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.building-message .Character{
		margin-top: 15px;
	}
	.building-message .Character i{
		font-style: normal;
		margin-right: 10px;
	    padding: 3px 7px;
	    font-size: 13px;
	}
	.building-message .Character i:nth-child(3n+2){
		background: #EBF3FE;
	    color: #638EC9;
	}
	.building-message .Character i:nth-child(3n){
		background: #F8EAE6;
    	color: #E3957E
	}
	.building-message .Character i:nth-child(3n+1){
		background: #E2F8E1;
    	color: #75AB78;
	}
	/*单价*/
	.unit-price {
		position: absolute;
		top: 75px;
		right: 100px;
	}
	.unit-price i{
		display: inline-block;
		font-size: 24px;
    	color: #FF5454;
    	font-weight: 600;
	}
	.unit-price span{
		display: inline-block;
		margin-left: 8px;
	}
</style>