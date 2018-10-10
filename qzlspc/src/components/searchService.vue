<template>
	<div class="searchService">
		<div class="searchService-main public-container">
			<div class="searchService-header">
				<h2>周边配套</h2>
			</div>
			<div id="map-container"></div>
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
		    	// this.getResult();
		    	var poiText = "交通";
			    var regionText = this.region;
			    console.log(regionText);
			    console.log(poiText);
			    
			    searchService.setLocation(regionText);

			    searchService.search(poiText);
			},
			getResult() {

			    //设置searchRequest
			    // var poiText = "酒店";
			    // var regionText = this.region;
			    // console.log(regionText);
			    // console.log(poiText);
			    
			    // searchService.setLocation(regionText);

			    // searchService.search(poiText);

			}
		},
		mounted() {
			this.init();
			this.getResult();
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

</style>