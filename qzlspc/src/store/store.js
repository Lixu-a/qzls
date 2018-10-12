import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		//屋子列表信息数据
		reqlistItem:[],
		//推荐列表数据
		recommendItem:[],
		//新闻动态数据
		dynamicTotal:[],
		//是否登录判断
		islogin:''
	},
	mutations:{
		//保存一份请求的房子列表数据
		add:(state,n) => {
			state.reqlistItem = Object.assign(n);
		},
		recommendItem:(state,n) => {
			state.recommendItem = Object.assign(n);
		},
		dynamicTotal:(state,n) => {
			state.dynamicTotal = Object.assign(n);
		},
		login:(state,n) => {
			//传入登录状态islogin
			let islogin = JSON.parse(n);
			localStorage.setItem('islogin',JSON.stringify(islogin));
			console.log(islogin);
			state.islogin = islogin;
		} 
	},
	actions:{

	}
})