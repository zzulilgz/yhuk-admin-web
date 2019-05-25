<template>
    <el-container>
      <el-header>
        <t-header></t-header>
      </el-header>
      <el-container>
        <el-aside width="200px" v-bind:style="{ height: asideHeight + 'px' }">
          <t-aside-menu></t-aside-menu>
        </el-aside>
        <el-container>
          <el-main v-bind:style="{ height: mainHeight + 'px'}">
              <router-view></router-view>
          </el-main>
          <el-footer height="30px"><t-footer></t-footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
  import tHeader from './Header'
  import tAsideMenu from './AsideMenu'
  import tFooter from './Footer'
    export default {
        name: "Layout",
        components:{
          tHeader,
          tAsideMenu,
          tFooter
        },
        data(){
          return{
            asideHeight:document.documentElement.clientHeight-60,
            mainHeight:document.documentElement.clientHeight-90
          }
        },
      watch: {
        asideHeight (val) {
          if(!this.timer) {
            this.asideHeight = val
            this.timer = true
            let that = this
            setTimeout(function (){
              that.timer = false
            },400)
          }
        }
      },
      mounted() {
        const that = this
        window.onresize = () => {
          return (() => {
            window.asideHeight = document.documentElement.clientHeight-60;
            window.mainHeight = document.documentElement.clientHeight-90;
            that.asideHeight = window.asideHeight;
            that.mainHeight = window.mainHeight;
          })()
        }
      }
    }
</script>

<style lang="less">
  @import '../assets/css/base.less';
  .el-header {
    background-color:rgb(64, 158, 255);
    color: #333;
    line-height: 60px;
  }
  .el-footer {
    background:grey;
    color: #333;
    line-height: 30px;
    text-align: center;
  }
  .el-aside {
    background-color: rgb(84, 92, 100);
    color: #333;
  }
  .el-main {
    background-color: #f6faff;
    color: black;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
