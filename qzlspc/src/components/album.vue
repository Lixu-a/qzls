<template>
	<div class="album">
		<div class="album-main public-container">
			<div class="album-header">
				<h2>房屋相册</h2>
			</div>
			<ul class="album-images">
				<li v-for="(item,index) in images" :key="index">
					<img @click="bigImg" :src="item.image" alt="">
				</li>
			</ul>
			<div class="album-footer">
				<span @click="openClose()" v-show="images.length<6">展开</span>
				<span @click="openClose()" v-show="images.length>5">收起</span>
				<img @click="openClose()" :class="{'rotate':images.length>5}" src="/static/images/unfold_ico.png" alt="">
			</div>
		</div>
		<!-- 点击里面的图片放大图片 -->
		<transition name="fade">
		    <div class="img-layer" @click="hideImg" v-show="imgSrcflag">
		        <!-- 遮罩层 -->
			    <div class="img">
			        <img :src="imgSrc">
			    </div>
		    </div>
	    </transition>
	</div>
</template>

<script>
	export default{
		name:'album',
		props:{
			imgList:{
				type:Array
			}
		},
		data() {
			return{
				images:"",//循环的图片数组
				imgSrc:'',//放大的图片
				imgSrcflag:false
			}
		},
		created() {
			//相册先展示4张图片
			this.images = this.imgList.slice(0,5);
		},
		methods:{
			//展开收起图片
			openClose() {
				let imglength = this.images.length;
				if (imglength<6) {
					this.images = this.imgList;
					//滚动条向下滚动
					this.$nextTick(() => {
						document.documentElement.scrollTop=880;
					});
				}else{
					this.images = this.imgList.slice(0,5);
				}
			},
			// 放大图片,显示遮罩层
			bigImg(e) {
				this.imgSrc = e.currentTarget.src;
				this.imgSrcflag = true;
			},
			// 隐藏遮罩层
			hideImg() {
				this.imgSrcflag = false;
			}
		}
	}
</script>

<style scoped>
	.album{
		width: 100%;
		padding: 60px 0;
		
	}
	.album-main{
		background-color: #fff;
		border-radius: 8px;
		/*height: 294px;*/
		text-align: left;
	}
	.album-main:hover{
		box-shadow: 0px 0px 30px rgba(0,0,0,.1);
	}
	.album-main .album-header{
		/*background-color: red;*/
		border-bottom: 1px solid #EAE9E9;
    	padding-top: 10px;
    	margin: 0 20px;
	}
	.album-main .album-header h2{
	    font-size: 20px;
	    color: #333;
	    font-weight: normal;
	    padding-left: 5px;
	    font-weight: 600;
	}
	.album-main .album-images{
		font-size: 0;
		overflow: auto;
		margin-left: -20px;
	}
	.album-main .album-images li{
		float: left;
		margin-top: 16px;
		margin-left: 15px;
		width: 220px;
		height: 160px;
	}
	.album-main .album-images li:nth-child(5n+1){
		margin-left: 0px;
	}
	.album-main .album-images li img{
		width: 100%;
		height: 100%;
	}
	.album-main .album-footer{
		text-align: center;
	}
	.album-main .album-footer span{
		display: inline-block;
		cursor: pointer;
		text-align: center;
	    font-size: 14px;
	    color: #aaa;
	    margin-top: 10px;
	    padding: 10px 0px 10px 30px;
	    /*background-color: red;*/
	}
	.album-main .album-footer img{
		vertical-align: middle;
		cursor: pointer;
	}
	.album-main .album-footer img.rotate{
		transform:rotate(180deg);
	}
	/*图片放大定位*/
	.img-layer {
	    position: fixed;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    background-color: rgba(0,0,0,.3);
	    display: flex;
	    align-items: center;
	    justify-content: center;
	}
	.img-layer .img{
		width: 660px;
		height: 480px;
	}
	.img-layer .img img{
		width: 100%;
		height: 100%;
	}
	.fade-enter-active,
  	.fade-leave-active {
    	transition: all .5s linear;
    	transform: translate3d(0, 0, 0);
    	opacity: 1;
  	}
  	.fade-enter,
  	.fade-leave-to {
    	transform: translate3d(0, 100%, 0);
    	opacity:0;
  	}
</style>