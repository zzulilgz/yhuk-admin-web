<template>
  <div>
    <span class="header-span">Vue基础服务管理系统</span>
    <el-col :span="4" class="userinfo">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link userinfo-inner"><img
          :src="url"/>liugaozhi</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </div>

</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        url:'http://blog-1252061633.cossh.myqcloud.com/TIM%E6%88%AA%E5%9B%BE20180801153921.png'
      }
    }
  }
</script>

<style scoped lang="less">
  .header-span {
    font-size: 30px;
    margin-left: 20px;
    color: white;
  }

  .userinfo {
    text-align: right;
    padding-right: 35px;
    float: right;
    .userinfo-inner {
      cursor: pointer;
      color: #fff;
      img {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin: 10px 0px 10px 10px;
        float: right;
      }
    }
  }
</style>
