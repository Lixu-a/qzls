import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		//屋子列表信息数据
		reqlistItem:[],
		//推荐列表数据
		recommendItem:[],
		dynamicTotal:[]
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
		}
	},
	actions:{

	}
})