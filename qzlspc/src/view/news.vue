<template>
	<div class="news public-container">
		<div id="container" style="width:600px;height:500px;"></div>
		<div id="wrap"></div>
	</div>
</template>

<script>
	export default{
		name:'news',
		data() {
			return {
				longitude:39.916527,//经度
				latitude:116.397128//纬度
			}
		},
		methods:{
			init() {
		        //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
		        //设置地图中心点
		        var myLatlng = new qq.maps.LatLng(this.longitude,this.latitude);
		        //定义工厂模式函数
				var myOptions = {
				  zoom: 13,               //设置地图缩放级别
				  center: myLatlng    //设置中心点样式
				  // mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
				}
				//获取dom元素添加地图信息
		        var map = new qq.maps.Map(document.getElementById("container"), myOptions);
		        //给地图添加点击事件
			    //并获取鼠标点击的经纬度
				    // qq.maps.event.addListener(map, 'click', function(event) {
				    //     this.longitude = event.latLng.getLat();
				    //     this.latitude = event.latLng.getLng();
				    //     alert("经度:"+this.longitude+","+"纬度:"+this.latitude);
				    // });
			    //添加比例尺控件
				    // var scaleControl = new qq.maps.ScaleControl({
				    //     align: qq.maps.ALIGN.TOP_LEFT,// align 表示添加位置的对齐方式
				    //     margin: qq.maps.Size(85, 15),//margin 表示距离第二个参数指定的位置的横方向和竖方向的偏移量，为正数则向地图中心方向偏移
				    //     map: map//map 表示要添加到的地图对象
				    //  });
			    //自定义控件
				 	//var zoomLevelControl = new qq.maps.Control(
					//     {
					//         content: '缩放级别:' + map.getZoom(),
					//         align: qq.maps.ALIGN.TOP,
					//         map: map
					//     }
					// );
					var marker = new qq.maps.Marker({
					    position: myLatlng ,
					    map: map
					});
						 var anchor = new qq.maps.Point(0, 0),
					     	 size = new qq.maps.Size(42, 68),
					     	 origin = new qq.maps.Point(0, 0),
						 	 markerIcon = new qq.maps.MarkerImage(
					      "/static/images/logo.png",
					      size, 
					      origin,
					      anchor
					    );
					    marker.setIcon(markerIcon);//setIcon 方法来将图标样式绑定到标注上
		    }
		},
		mounted() {
			this.init();
			document.getElementById("wrap").scrollIntoView();
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
</style>