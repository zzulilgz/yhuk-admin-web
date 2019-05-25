<template>
  <!--   :router="true"  允许菜单路由-->
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    :router="true"
    active-text-color="#ffd04b">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/admin/role">角色管理</el-menu-item>
        <el-menu-item index="/admin/user">用户管理</el-menu-item>
        <el-menu-item index="/admin/menu">菜单管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>图床管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="role">角色管理</el-menu-item>
        <el-menu-item index="user">用户管理</el-menu-item>
        <el-menu-item index="menu">菜单管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: "AsideMenu"
    }
</script>

<style scoped>
  .el-menu {
    border-right: solid 0px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    text-align: left;
  }
</style>
