<template>
	<div class="building-list public-container" >
        	<ul>
        		<li>
        			<router-link to="/home">
        				<img :src="listItem.image" alt="">
        			</router-link>
        			<div class="building-message">
        				<div class="title">
        					{{listItem.title}}
        				</div>
        				<div class="phone-number">
        					<img src="../assets/images/phone.png" alt="">
        					<span>{{listItem.phone}}</span>
        				</div>
        				<div class="room-style" v-if="listItem.style">
        					户型：{{listItem.style}}
        				</div>
        				<div class="address">
        					{{listItem.address}}
        				</div>
        				<div class="character">
        					<i v-for="(item,index) in character">{{item.c}}</i>
        				</div>
        			</div>
        			<div class="unit-price" >
        				<i>{{listItem.price}}</i><span v-if="listItem.price">元/㎡</span><span v-if="!listItem.price">暂无</span>
        			</div>
        		</li>
        	</ul>
        </div>
</template>

<script>
	export default{
		name:"building-list",
		props:{
			listItem:{
				type:Object
			}
		},
		computed:{
			character() {
				return this.listItem.character;
			}
		}
	}	
</script>

<style>
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
	.building-list ul li:hover {
		box-shadow: 0px 0px 30px rgba(0,0,0,.1);
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
	.building-message .character{
		margin-top: 15px;
	}
	.building-message .character i{
		font-style: normal;
		margin-right: 10px;
	    padding: 3px 7px;
	    font-size: 13px;
	}
	.building-message .character i:nth-child(3n+2){
		background: #EBF3FE;
	    color: #638EC9;
	}
	.building-message .character i:nth-child(3n){
		background: #F8EAE6;
    	color: #E3957E
	}
	.building-message .character i:nth-child(3n+1){
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
    	color: #fc8c49;
    	font-weight: 600;
	}
	.unit-price span{
		display: inline-block;
		margin-left: 8px;
	}
</style>

