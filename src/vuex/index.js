/**
 * Created by xiaolang ON 2018/11/2
 * vuex 教程 https://segmentfault.com/a/1190000009404727
*/
import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

export default new vuex.Store({
  modules:{  //引入其他模块
  },
  state:{
    token:''
  },
  mutations:{
    refreshToken(state,token){//这里的state对应着上面这个state
      console.log("修改state.token")
      state.token = token;
      //你还可以在这里执行其他的操作改变state
    }
  }
})
