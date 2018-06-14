import Todos from '@/components/temp/Body'

export const defaultRouter = {
  path: '/',
  name: 'default',
  redirect: '/login'
}

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'login'
  },
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
  defaultRouter,
  loginRouter,
  ...appRouter
];
