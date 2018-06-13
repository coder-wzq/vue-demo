<template>
  <div id="app" class="todoapp">
    <MyHeader/>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <MyFooter />
  </div>
</template>

<script>
  import MyHeader from './temp/Header'
  import MyFooter from './temp/Footer'
  export default {
    name: 'app',
    methods: {
    },
    watch:{
    },
    components: {
      MyHeader, MyFooter
    },
    created () {
    }
  }

</script>
<style>
#app{
  width: 100%;
  height:100%;
}
</style>
