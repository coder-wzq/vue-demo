<template>
  <div id="header">

  </div>
</template>

<script>
  export default {
    name: 'myHeader',
    data() {
      return {
        newTodo: ''
      }
    },
    methods: {
      addTodo() {
        this.$emit('addTodoHandle', this.newTodo)
      }
    }
  }
</script>
<style scoped>
#header{
  width: 100%;
  height: 50px;
  background-color: cadetblue;
}
</style>
