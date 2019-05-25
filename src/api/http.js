import axios from 'axios'
axios.defaults.timeout = 5000;
import store from '@/vuex'
export default axios;
// axios.defaults.withCredentials = true

axios.interceptors.request.use(
  config => {
    console.log("request",document.cookie);
    if (store.state.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token =store.state.token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  });
axios.interceptors.response.use(
  response => {
    console.log("interceptors.response",response);
    switch (response.data.code) {
      case 1001:
        //sessionStorage.removeItem("user");
    }
    return response;
  },
  error => {
    console.log("error",error);
    if (error.response) {
      console.log(error.response.status);
      // switch (error.response.status) {
      //   case 401:
      //     // 返回 401 清除token信息并跳转到登录页面
      //     store.commit(types.LOGOUT);
      //     router.replace({
      //       path: 'login',
      //       query: {redirect: router.currentRoute.fullPath}
      //     })
      // }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });
