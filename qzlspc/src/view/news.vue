<template>
	<div class="news">
		<div id="container" style="width:100%;height:500px;"></div>
		<div id="wrap"></div>
		<div class="dynamic-wrap public-container" style="text-align:left;">
			<div class="big-title">
				楼市动态
			</div>
			<div v-for="(item,index) in dynamic" :key="index">
				<dynamic :dynamic="item"></dynamic>
			</div>
			<div v-if="olddynamic.length"  style="width: 880px;height: 30px;line-height:30px;margin-bottom: 20px;border-radius: 3px;
	       	color:#FC8C49;text-align:center;">
		       	<el-pagination
				  background
				  @current-change="handleCurrentChange"
				  layout="prev, pager, next"
				  :total="olddynamic.length">
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import dynamic from '../components/dynamic'
	export default{
		name:'news',
		data() {
			return {
				longitude:118.613,//经度
				latitude:24.88946,//纬度
				city:'',
				olddynamic:[],
				dynamic:[]
			}
		},
		components:{
			dynamic
		},
		methods:{
			//实现定位当前位置
		  	getMyLocation() {
		  		var geolocation = new qq.maps.Geolocation("QCQBZ-4UEWX-R7H4J-ZIS3Q-XGPGE-GDF3G", "qzls_map");
		  		geolocation.getIpLocation(this.showPosition, this.showErr);
		  	},
		  	showPosition(position) {
		  		console.log(position);
		  		this.latitude = position.lat;
		  		this.longitude = position.lng;
		  		this.city = position.city;
		  		this.setMap();
		  	},
		  	showErr() {
		  		console.log("定位失败咯");
		  		this.getMyLocation();
		  	},
		  	setMap() {
		  		//步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
		        //设置地图中心点
		        var myLatlng = new qq.maps.LatLng(this.latitude,this.longitude);
		        //定义工厂模式函数
				var myOptions = {
				  zoom: 13,               //设置地图缩放级别
				  center: myLatlng,    //设置中心点样式
				  mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
				}
				// //获取dom元素添加地图信息
		        var map = new qq.maps.Map(document.getElementById("container"), myOptions);
		        //给定位的位置添加图片标注
		        var marker = new qq.maps.Marker({
				    position: myLatlng,
				    map: map
				});
				//更改为自定义图片标注
				var anchor = new qq.maps.Point(0, 39),
			         size = new qq.maps.Size(42, 68),
			         origin = new qq.maps.Point(0, 0),
			         markerIcon = new qq.maps.MarkerImage(
			     "https://3gimg.qq.com/lightmap/api_v2/2/4/99/theme/default/imgs/marker.png",
			     size,
			     origin,
			     anchor
			   );
			   marker.setIcon(markerIcon);
				//给定位的位置添加文本标注
				var marker = new qq.maps.Label({
				    position: myLatlng,
				    map: map,
				    content:'泉州楼市，你的楼市'
				});
		  	},
		  	handleCurrentChange(val) {
		  		console.log(`当前页: ${val}`);
				let a = val;
		        this.dynamic=this.olddynamic.slice(a*6-6,a*6);
		        // 滚动条滚动
				this.$nextTick(() => {
					document.documentElement.scrollTop=580;
				});
		  	}
		  },
		  mounted() {
			this.getMyLocation();
			// document.getElementById("wrap").scrollIntoView();
			//请求新闻数据
			this.axios.get("/static/lib/news.json").then(res=>{
				this.olddynamic = Object.assign([],res.data.result);
				this.dynamic = res.data.result.slice(0,6);
				this.$store.commit('dynamicTotal',res.data.result);
			});
		 }
		}
</script>

<style scoped>
	/*.news{
		margin: 0 auto;
	}
	.container{
		margin: 0 auto;
	}*/
	#info{
	    width:603px;
	    padding-top:3px;
	    overflow:hidden;
	}
	.btn{
	    width:112px;
	}
	.dynamic-wrap{
		border-radius: 10px;
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.dynamic-wrap .big-title{
		border-bottom: 1px solid #E6E6E6;
	    font-size: 20px;
	    color: #3C4759;
	    font-weight: 600;
	    width: 860px;
	    margin: auto 0;
	    padding: 20px;
	    background-color: #fff;
	}
</style>