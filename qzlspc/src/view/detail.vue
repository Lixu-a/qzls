<template>
	<div class="detail">
		<div class="detail-header">
			<div class="detail-message public-container">
				<div class="msg-left">
					<div class="img">
						<img :src="imageBig" alt="">
					</div>
					<div class="img-list">
						<ul class="img-wrap">
							<li v-for="(item,index) in listItem.imgList.slice(0,4)" :key="index">
								<img @click="changeImage($event)" :class="{'imageactive':imageflag==index}" :data-index="index" :src="item.image" alt="">
							</li>
						</ul>
					</div>
				</div>
				<div class="msg-right">
					<div class="title">
						{{listItem.title}}
					</div>
					<div class="price" v-if="listItem.price">
						均价：
						<em>
						{{listItem.price}}
						<span>元/㎡</span>
						</em>
						<span v-if="listItem.release">（发布时间：{{listItem.release}}）</span>
					</div>
					<div class="character">
						<i v-for="(item,index) in listItem.character" :key="index">{{item.c}}</i>
					</div>
					<div class="phone-number" v-if="listItem.phone">
						<img src="../assets/images/phone.png" alt="">
						<a :href="'tel:'+listItem.phone">{{listItem.phone}}</a>
					</div>
					<div class="room-style" v-if="listItem.area">
						面积：{{listItem.area}}
					</div>
					<div class="room-style" v-if="listItem.style">
						户型：{{listItem.style}}
					</div>
					<div class="address" v-if="listItem.address">
						地址：{{listItem.address}}
					</div>
				</div>
			</div>
		</div>
		<div class="photo">
			<album :imgList="listItem.imgList"></album>
		</div>
	</div>
</template>

<script>
import album from "../components/album"
	export default{
		name:'detail',
		data() {
			return {
				listItem:{},//传过来的这条房子信息
				imageBig:'',//detail
				imageflag:0//切换图片
				
			}
		},
		components:{
			album
		},
		computed: {
			id(){
				//获取路由传过来的id
				return this.$route.params.id;
			}
		},
		created() {
			//在reqlistItem里面获取跟此页面相同id的索引
			let listItemIndex = this.$store.state.reqlistItem.findIndex((item) => {
				return item.id == this.id; 
			});
			//根据索引获取此页面的数据
			this.listItem = this.$store.state.reqlistItem[listItemIndex];
			//渲染第一张大图
			this.imageBig = this.$store.state.reqlistItem[listItemIndex].image;
		},
		methods:{
			changeImage(e) {
				//切换图片
				this.imageBig = e.currentTarget.src;
				//点击哪个图片加上imageactive样式
				this.imageflag = e.currentTarget.dataset.index;
			}
		}
	}
</script>

<style scoped>
	.detail{
		width: 100%;
	}
	.detail-header{
		background:url(/static/images/detail-bg.png) no-repeat;
		background-size: 100% 800px;
		height: 650px;
		padding-top: 70px;
	}
	.detail-message{
		/*height: 570px;*/
		overflow: auto;
		border-radius: 8px;
		background-color: #fff;
		box-shadow: 6px 6px 10px  rgba(0,0,0,.1);
		
	}
	.detail-message .msg-left{
		width: 523px;
		height: 526px;
		float: left;
		margin: 20px;
	}
	.detail-message .msg-left .img{
		width: 523px;
		height: 411px;
	}
	.detail-message .msg-left .img img{
		width: 100%;
		height: 100%;
	}
	.detail-message .msg-left{

	}
	.detail-message .msg-left .img-list{
		/*ul的宽度*/
		width: 540px;
		height: 100px;
		margin-top: 10px;
	}
	.detail-message .msg-left .img-wrap{
		font-size: 0px;
		white-space: nowrap;
	}
	.detail-message .msg-left .img-wrap li{
		width: 120px;
		height: 96px;
		margin-right: 14px;
		float: left;
	}
	.detail-message .msg-left .img-wrap li:nth-child(1){
		margin-left: -40px;
	}
	.detail-message .msg-left .img-wrap li img{
		width: 100%;
		height: 100%;
		border: 1px solid transparent;
	}
	.imageactive{
		border: 1px solid rgba(254, 112, 26, 0.8) !important;
		box-shadow: 6px 6px 10px  rgba(0,0,0,.1);
	}
	.detail-message .msg-right{
		width: 615px;
		height: 526px;
		float: left;
		margin-top: 20px;
		text-align: left;
	}
	.detail-message .msg-right .title{
		font-size: 28px;
	    color: #5C473B;
	    display: inline-block;
	    font-weight: 600;
	}
	.detail-message .msg-right .price{
		margin-top: 20px;
		font-size: 14px;
	}
	.detail-message .msg-right .price em{
		font-style: normal;
		font-size: 24px;
	    color: #FF5454;
	    display: inline-block;
	    font-weight: 600;
	}
	.detail-message .msg-right .price em span{
		font-size: 14px;
	    color: #666;
	    display: inline-block;
	}
	.detail-message .msg-right .phone-number{
		margin-top: 20px;
	}
	.detail-message .msg-right .phone-number img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
	.detail-message .msg-right .phone-number a{
		font-size: 18px;
    	color: #627B9E;
    	font-weight: 600;
	}
	.detail-message .msg-right .room-style{
		margin-top: 20px;
		font-size: 14px;
    	color: #666;
	}
	.detail-message .msg-right .address{
		margin-top: 20px;
	    width: 220px;
	    font-size: 14px;
	    color: #666;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.detail-message .msg-right .character{
		margin-top: 20px;
	}
	.detail-message .msg-right .character i{
		font-style: normal;
		margin-right: 10px;
	    padding: 3px 7px;
	    font-size: 13px;
	}
	.detail-message .msg-right .character i:nth-child(3n+2){
		background: #EBF3FE;
	    color: #638EC9;
	}
	.detail-message .msg-right .character i:nth-child(3n){
		background: #F8EAE6;
    	color: #E3957E
	}
	.detail-message .msg-right .character i:nth-child(3n+1){
		background: #E2F8E1;
    	color: #75AB78;
	}
</style>