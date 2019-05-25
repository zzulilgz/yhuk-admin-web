import axios from '@/api/http';

export default {
  //增删改的返回结果是统一的，后端接口命名统一
  saveOrUpdateOrDel(type, method, params,id) {
    if (method.indexOf("save") != -1 || method.indexOf("add") != -1 || id===null) { //增加方法
      return axios.post('/power/' + type + '/' + method, params);
    }
    else if(method.indexOf("delete")!=-1) {
      return axios.delete('/power/' + type + '/' + method+'/'+id);
    }else {
      return axios.put('/power/' + type + '/' + method+'/'+id, params);
    }
  },
  query(type,method,params){
    return axios.post('/power/' + type + '/' + method, params);
  },
  test(){
    return axios.get('authorize/is_login');
  },
  login(params){
    return axios({
      url: '/authorize/login',
      method: 'post',
      data: {
        userName: params.loginName,
        password: params.password,
        client_id: 'test'
      },
      transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
  }
}
