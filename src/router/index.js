import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/common/Layout'
import MainIndex from '@/common/index'
import RoleList from '@/modules/power/views/role/role-list'
import UserList from '@/modules/power/views/role/user-list'
import MenuList from '@/modules/power/views/role/menu-list'
import Login from '@/common/Login'
import LoginTmp from '@/common/Login-tmp'
Vue.use(Router)
/**
 * 总路由配置，目前仅有一个模块，暂时不整合
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin/login',
      name: 'LoginTmp',
      component: LoginTmp,
    },
    {
      path: '/admin',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path:'/admin',
          name:'index',
          component:MainIndex
        },
        {
          path:'/admin/role',
          name:'role-list',
          component:RoleList
        },
        {
          path:'/admin/user',
          name:'user-list',
          component:UserList
        },
        {
          path:'/admin/menu',
          name:'menu-list',
          component:MenuList
        }
      ]
    }
  ]
})
