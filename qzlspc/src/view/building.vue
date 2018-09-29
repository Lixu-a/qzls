<template>
	<div class="building">
		<div class="condition-filter public-container">
			<div class="filter-title">
				<i><span>条件筛选</span></i>
			</div>
			<div class="region">
		        <div class="region-title">
	                <em>区域</em>
	                <a href="javascript:void(0)" name="city" value="0">不限</a>
		        </div>
                <p class="citys">
	                <a href="javascript:void(0)" name="city" pinyin="beihaishi" value="43">北海市</a>
	                <a href="javascript:void(0)" name="city" pinyin="fangchenggangshi" value="44">防城港市</a>               
	                <a href="javascript:void(0)" name="city" pinyin="guilinshi" value="45" id="nav">桂林市</a>
                </p>
            </div>
            	
            </div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'building'
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
	.region{
		padding: 10px 0;
		background-color: #fff;
		box-shadow: -3px 0px 10px rgba(0,0,0,.1),
					0px 0px 0px rgba(0,0,0,0.01),
					0px 0px 0px rgba(0,0,0,0.01),
					3px 0px 10px rgba(0,0,0,.1);
		overflow: auto;
	}
	.region-title{
	    width: 145px;
	    float: left;
	    text-align: center;
	    display: block;
	}
	.region-title em {
	    font-size: 14px;
	    color: #333;
	    font-weight: 600;
	    position: relative;
	    top: 17px;
	    font-style: normal;
	}
	.region-title  a {
	    font-size: 14px;
	    margin: 10px;
	    position: relative;
	    top: 17px;
	    left: 16px;
	    padding: 5px 6px;
	    border-radius: 3px;
	    color: #333;
	}
	.citys {
		display: block;
	    margin-bottom: 15px;
	    width: 1040px;
	    float: left;
	}
	.citys a {
	    height: auto;
	    margin: 0 auto;
	    left: 50px;
	    padding: 5px 10px 5px 10px;
	    border-radius: 3px;
	    color: #737373;
	}
	.citys a:hover,.region-title  a:hover{
		background-color: #FC8C49;
		color: #fff;
	}
</style>