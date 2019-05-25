<template>

  <el-form :model="loginData" label-width="100px" class="demo-ruleForm form-position">
    <el-form-item label="账号" prop="pass">
      <el-input type="password" v-model="loginData.loginName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="checkPass">
      <el-input type="password" v-model="loginData.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">提交</el-button>
      <el-button type="primary" @click="test">test</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import api from "@/api/power";
    export default {
        name: "Login",
        data(){
          return {
            loginData:{}
          }
        },
      methods:{
        login(){
          api.login(this.loginData).then(res=>{
            console.log('login',res);
            console.log('cookie',res.headers.session_id);
            this.$cookies.remove("JSESSIONID",'/login',false);
            this.$cookies.set("JSESSIONID",res.headers.session_id,false,'/login',false,null);
            console.log('JSESSIONID',this.$cookies.get("JSESSIONID"));
          }).catch(error=>{
            console.log(error);
          });
        },
        test(){
          api.test().then(res=>{
            console.log('test',res);
          })
        }
      }
    }
</script>

<style scoped>
.form-position{
  margin: 40px 500px;
}
</style>
