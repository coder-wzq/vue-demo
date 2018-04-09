<template>
  <footer class="footer">
    <span class="todo-count">
        2 items left
      </span>
    <ul class="filters">
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <li><router-link to="/todos/All" active-class="selected" exact replace>All</router-link></li>
      <li><router-link to="/todos/Active" active-class="selected" exact replace>Active</router-link></li>
      <li><router-link to="/todos/Completed" active-class="selected" exact replace>Completed</router-link></li>
      <li><router-link to="/First" active-class="selected" exact replace>First</router-link></li>
    </ul>
    <button class="clear-completed">
      Clear completed
    </button>
  </footer>
</template>

<script>
  export default {
    name: 'myFooter',
    data () {
      return {
        remain: '2 items left'
      }
    }
  }
</script>
