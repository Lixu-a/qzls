import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		reqlistItem:[]
	},
	mutations:{
		//保存一份请求的房子列表数据
		add:(state,n) =>{
			state.reqlistItem = Object.assign(n);
		},
	},
	actions:{

	}
})