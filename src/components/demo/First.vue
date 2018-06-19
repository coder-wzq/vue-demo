<template>
  <div>
    <el-input style="width: 200px;" v-model="time"></el-input>
    <br>
    <el-button @click="send">Send</el-button>
    <el-input style="width: 200px;" v-model="msg"></el-input>
    <br>
    <el-button @click="logout">Logout</el-button>
  </div>
</template>

<script>
  import Store from '@/store/index'

  export default {
    name: "first",
    data() {
      return {
        time: '',
        msg: ''
      }
    },
    methods: {
      logout() {
        Store.userName.save('');
        Store.userAuth.save('');
        this.$router.push({path: 'login'});
      },
      send(){
        this.socket.pub('/app/getMessages');
      }
    },
    mounted() {
      this.socket.sub('/topic/callback', this, 'time');
      this.socket.sub('/queue/msg-1', this, 'msg');
    }
  }
</script>

<style scoped>

</style>
