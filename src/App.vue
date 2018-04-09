<template>
  <div id="app" class="todoapp">
    <MyHeader @addTodoHandle="addTodo"/>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <MyFooter />
  </div>
</template>

<script>
  import uuid from 'uuid'
  import MyHeader from './components/temp/Header'
  import MyFooter from './components/temp/Footer'
  import Store from './store/index'
  export default {
    name: 'app',
    data () {
      return {
        todos: Store.todos.fetch(), // 存储所有todos
      }
    },
    methods: {
      addTodo (value) {
        value = value && value.trim()
        if (!value) {
          return
        }
        this.todos.push({
          id: uuid(),
          title: value,
          completed: false
        })
      }
    },
    watch:{
      todos:{
        handler:function (todos) {
          Store.todos.save()
        },
        deep:true
      }
    },
    components: {
      MyHeader, MyFooter
    },
    created () {
      let filter = this.$route.params.filter
      if (!filter) {
        this.$router.replace({ path: 'All' })
      }
    }
  }

</script>
<style>
  @import '../node_modules/todomvc-app-css/index.css';
</style>
