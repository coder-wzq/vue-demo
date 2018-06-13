<template>
  <div>
    this is body!
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
