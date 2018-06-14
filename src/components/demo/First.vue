<template>
  <div>
    this is a demo page!
    <input type="button" @click="logout()" value="logout">
  </div>
</template>

<script>
  import Store from '@/store/index'
  export default {
    name: "first",
    methods: {
      logout() {
        Store.userName.save('');
        Store.userAuth.save('');
        this.$router.push({path:'login'});
      }
    }
  }
</script>

<style scoped>

</style>
