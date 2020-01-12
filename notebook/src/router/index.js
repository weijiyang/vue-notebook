import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/routerView.vue'
import list from '@/views/list.vue'
import add from '@/views/add.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        {
          name: 'list',
          path: 'list',
          meta:{ index: 0 },
          component: list
        },
        {
          name: 'add',
          path: 'add',
          meta:{ index: 1 },
          component: add
        }
      ]
    },
    {
      path: '*',
      redirect: 'list'
    }
  ]
})