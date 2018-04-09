<template>
  <div>
    123123123
  </div>
</template>

<script>
  export default {
    name: 'todos',
    watch: {
      '$route': function (to, from) {
        console.log(to)
      }
    }
  }

</script>
