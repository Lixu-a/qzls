<template>
	<div class="searchService">
		<div class="searchService-main public-container">
			<div class="searchService-header">
				<h2>周边配套</h2>
			</div>
			<div class="map-wrap">
				<div id="map-container"></div>
				<ul class="search-wrap">
					<li  class="item" :class="{active:poiText=='交通'}" @click="getResult($event)" data-result="交通">
						<i><img src="../assets/images/ico_12.png" alt="交通"></i>
						<span>交通</span>
					</li>
					<li class="item" :class="{active:poiText=='餐饮'}" @click="getResult($event)" data-result="餐饮">
						<i><img src="../assets/images/ico_13.png" alt="餐饮"></i>
						<span>餐饮</span>
					</li>
					<li class="item" :class="{active:poiText=='学校'}" @click="getResult($event)" data-result="学校">
						<i><img src="../assets/images/ico_14.png" alt="学校"></i>
						<span>学校</span>
					</li>
					<li class="item" :class="{active:poiText=='医疗'}" @click="getResult($event)" data-result="医疗">
						<i><img src="../assets/images/ico_15.png" alt="医疗"></i>
						<span>医疗</span>
					</li>
					<li class="item" :class="{active:poiText=='娱乐'}" @click="getResult($event)" data-result="娱乐">
						<i><img src="../assets/images/ico_16.png" alt="娱乐"></i>
						<span>娱乐</span>
					</li>
					<li class="item" :class="{active:poiText=='公园'}" @click="getResult($event)" data-result="公园">
						<i><img src="../assets/images/ico_17.png" alt="公园"></i>
						<span>公园</span>
					</li>
					<li class="item" :class="{active:poiText=='银行'}" @click="getResult($event)" data-result="银行">
						<i><img src="../assets/images/ico_18.png" alt="银行"></i>
						<span>银行</span>
					</li>
					<li class="item" :class="{active:poiText=='周边楼盘'}" @click="getResult($event)" data-result="周边楼盘">
						<i><img src="../assets/images/ico_19.png" alt="周边楼盘"></i>
						<span>周边楼盘</span>
					</li>
					<li class="item" :class="{active:poiText=='购物'}" @click="getResult($event)" data-result="购物">
						<i><img src="../assets/images/ico_20.png" alt="购物"></i>
						<span>购物</span>
					</li>
				</ul>
			</div>
			<div id="infoDiv"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'searchService',
		props:{
			region:{
				type:String
			},
		},
		data() {
			return {
				poiText:"交通",
				searchService:''
			}
		},
		methods:{
			init() {
				var map = null;
				var searchService = null;
			    let center = new qq.maps.LatLng(24.88946, 118.613);
			    map = new qq.maps.Map(document.getElementById('map-container'), {
			        center:center,
			        zoomLevel:13
			    });
			    //调用Poi检索类
			    searchService = new qq.maps.SearchService({
			        panel:document.getElementById('infoDiv'),
			        map : map
			    });
			    this.searchService = searchService;
		    	// this.getResult();
		    	var poiText = this.poiText;
			    var regionText = this.region;
			    console.log(regionText);
			    console.log(poiText);
			    searchService.setLocation(regionText);
			    searchService.search(poiText);
			},
			getResult(e) {
				this.poiText = e.currentTarget.dataset.result;
				// this.init();
				var poiText = this.poiText;
				console.log(poiText);
			    var regionText = this.region;
			    this.searchService.setLocation(regionText);
			    this.searchService.search(poiText);
			}
		},
		mounted() {
			this.init();
		}
	}
</script>

<style scoped>
	.searchService{
		width: 100%;
		padding: 30px 0 20px;

	}
	.searchService-main{
		background-color: #fff;
		border-radius: 8px;
		/*height: 294px;*/
		text-align: left;
	}
	.searchService-main:hover{
		box-shadow: 0px 0px 30px rgba(0,0,0,.1);
	}
	.searchService-main .searchService-header{
		/*background-color: red;*/
		border-bottom: 1px solid #EAE9E9;
    	padding-top: 10px;
    	margin: 0 20px;
	}
	.searchService-main .searchService-header h2{
	    font-size: 20px;
	    color: #333;
	    font-weight: normal;
	    padding-left: 5px;
	    font-weight: 600;
	}
	/*地图容器*/
	#map-container{
		width: 1160px;
		height: 400px;
		margin: 0 auto;
	}
	.map-wrap{
		position: relative;
	}
	/*搜索容器*/
	.map-wrap .search-wrap{
		position: absolute;
		top: 10px;
		right: 30px;
	}
	.map-wrap .search-wrap .item{
		width: 110px;
		height: 30px;
		cursor: pointer;
		margin-top: 10px;
		display: flex;
		color: #fff;
	}
	.map-wrap .search-wrap .item i{
		display: inline-block;
		width: 30px;
		height: 30px;
		text-align: center;
		line-height: 30px;
		background: #3D3D3D;
	}
	.map-wrap .search-wrap .item i img{
		width: 22px;
		height: 22px;
		vertical-align: top;
		border: none;
		margin-top: 5px;
	}
	.map-wrap .search-wrap .item span{
		width: 80px;
		height: 30px;
		line-height: 30px;
		text-align: center;
	    display: inline-block;
	    font-size: 14px;
	    background: rgba(0,0,0,0.5);
	}
	.map-wrap .search-wrap .item.active i{
		background-color: rgb(254, 112, 26);
    	color: #5B5B5B;
	}
	.map-wrap .search-wrap .item.active span{
		background-color: rgba(254, 112, 26,0.4);
    	color: #5B5B5B;
    	font-weight: 700;
	}
</style>