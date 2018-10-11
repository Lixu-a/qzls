<template>
	<div class="dynamic">
		<div class="time">
			<span>
				2018-09
			</span>
			<em>09</em>
		</div>
		<div class="title">
			<router-link to="/home">碧桂园二期预计10月开盘 均价13500元/㎡</router-link>
			<div class="content">
				在一个热闹的集市上，一个卖鱼的喊道：“鲜鱼!”这时，一个卖泡泡糖的紧接着喊：“泡糖! (泡汤)”那个卖鱼的听了，对那个卖糖的人说：“哎，你为什么说我的鱼泡汤了啊?”他们越吵越凶。就在这时，一个卖豆芽的又喊道：“豆芽! (斗呀)”一位治安员走了过来问：“还有谁在和他们吵架啊?”正巧一位卖油果的喊道：“油果! (有我)”治安员听了以后说：“那好，把你们四个一并带走!”
			</div>
			<router-link to="/home" class="more">查看详情</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'dynamic'
	}
</script>

<style scoped>
	.dynamic{
		width: 860px;
    	background: #fff;
    	padding: 20px;
    	font-size: 0;
	}
	.dynamic .time{
		width: 100px;
		height: 100px;
		text-align: center;
		border: 1px solid #E6E6E6;
		display: inline-block;
		overflow: hidden;
	}
	.dynamic .time span{
		display: block;
	    font-size: 14px;
	    color: #FE701A;
	    margin-top: 20px;
	}
	.dynamic .time em{
		display: block;
	    font-size: 35px;
	    color: #FE701A;
	    margin-top: 10px;
	}
	.dynamic .title{
		max-width: 600px;
		height: 100px;
	    display: inline-block;
	    font-size: 17px;
	    color: #513D3D;
	    font-weight: 600;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    margin-left: 10px;
	    overflow: hidden;
	}
	.dynamic .title a{
		color: #513D3D;
	}
	.dynamic .title a:hover{
		color: #FE701A;
		cursor: pointer;
	}
	.dynamic .title .content{
		font-size: 14px;
	    color: #666;
	    display: block;
	    line-height: 25px;
	    margin-top: 10px;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    overflow: hidden;
	}
	.dynamic .title .more{
		display: block;
	    border: 1px solid #E6E6E6;
	    font-size: 14px;
	    color: #8D7460;
	    width: 80px;
	    height: 30px;
	    text-align: center;
	    line-height: 30px;
	    margin-top: 10px;
	}
</style>