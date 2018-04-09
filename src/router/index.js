import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/demo/First'
import Todos from '@/components/temp/Body'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      redirect: '/first',
      component: First
    },
    {
      path: '/todos/:filter',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/first',
      name: 'First',
      component: First
    }
  ]
})
