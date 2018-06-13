import Main from '@/components/Main'
import Todos from '@/components/temp/Body'
import Login from '@/components/login/Login'

export const login = {
  path: '/',
  name: 'login',
  meta: {
    title: 'login'
  },
  redirect: '/login',
  component: () =>
    import('@/components/login/Login.vue')
}

export const appRouter = [
  {
    path: '/todos/:filter',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/first',
    title: 'first',
    name: 'first',
    component: () =>
      import('@/components/demo/First.vue')
  }
];


export const routers = [
  login,
  ...appRouter
];
