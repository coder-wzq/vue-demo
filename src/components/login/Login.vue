<template>
  <div id="loginDiv">
    <!--<iframe width="100%" height="100%" src="http://mrdoob.com/lab/javascript/webgl/voxels_liquid/"></iframe>-->
    <div id="loginForm">
      <div class="formInput">
        <el-input v-model="userName" placeholder="userName">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
        </el-input>
        <el-input type="password" id="psw" v-model="password" placeholder="password">
          <el-button slot="prepend" icon="el-icon-search"></el-button>
        </el-input>
        <el-button @click="login">Start</el-button>
      </div>
    </div>
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
        if (this.userName && this.password) {
          Store.userName.save(this.userName);
          Store.userAuth.save('auth-' + uuid());
          this.socket.connect();
          this.$router.push({path: 'first'});
        }
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .el-col {
    border-radius: 4px;
  }

  #loginDiv {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #loginForm {
    height: 280px;
    width: 400px;
    position: absolute;
    border: 2px solid rgba(95, 89, 89, 0.15);
    transform: translate(-50%, -60%);
    top: 50%;
    left: 50%;
  }

  .formInput {
    margin: 40px;
  }

  .formInput div {
    margin-bottom: 50px;
  }
</style>
