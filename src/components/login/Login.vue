<template>
  <div>
    <el-row>
      <el-col :span="4" :offset="10" id="loginDiv">
        <el-input v-model="userName" placeholder="userName"></el-input>
        <el-input type="password" v-model="password" placeholder="password"></el-input>
        <el-button @click="login">Start</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import uuid from 'uuid'
  import Store from '@/store/index'

  export default {
    name: "",
    data() {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      login() {
        if(this.userName&&this.password){
          Store.userName.save(this.userName);
          Store.userAuth.save('auth-'+uuid());
          this.$router.push({path:'first'});
        }
      }
    }
  }
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }
  #loginDiv{
    margin-top: 300px;
  }
</style>
