<template>
	<div class="dynamic">
		<div class="time">
			<span>
				{{dynamic.year}}
			</span>
			<em>{{dynamic.date}}</em>
		</div>
		<div class="title">
			<router-link v-bind="{to:'/dynamicDetail/'+dynamic.id}">{{dynamic.title}}</router-link>
			<div class="content">
				{{dynamic.content}}
			</div>
			<router-link v-bind="{to:'/dynamicDetail/'+dynamic.id}" class="more">查看详情</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'dynamic',
		props:{
			dynamic:{
				type:Object
			}
		}
	}
</script>

<style scoped>
	.dynamic{
		width: 860px;
    	background: #fff;
    	padding: 20px;
    	font-size: 0;
    	margin-bottom: 30px;
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