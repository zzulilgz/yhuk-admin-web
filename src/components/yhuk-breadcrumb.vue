<!--面包屑组件-->
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px">
    <el-breadcrumb-item >{{items[0]}}</el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: path }">{{items[1]}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{items[2]}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
    export default {
        name: "yhuk-breadcrumb",
        props:{
          items:Array,
          path:String
        }
    }
</script>

<style scoped>

</style>
