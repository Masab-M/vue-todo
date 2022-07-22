import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TodoList from '../views/TodoList.vue'
import SimpleView from '../components/SimpleView.vue'
import KanbanView from '../components/KanbanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },    {
      path: '/list',
      name: 'list',
      component: TodoList,
      children:[
        {
          path:'',
          component:SimpleView
        },
        {
          path:'simple',
          component:SimpleView
        },
        {
          path:'kanban',
          component:KanbanView
        },
      ]
    },
  ]
})

export default router
