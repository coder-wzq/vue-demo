<template>
  <div>
    <input type="text" placeholder="userName">
    <input type="password" placeholder="password">
    <input type="button" @click="login">
  </div>
</template>

<script>
    export default {
        name: "",
        methods:{
          login(){
            console.log('login')
          }
        }
    }
</script>

<style scoped>

</style>
