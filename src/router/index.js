import Vue from 'vue'
import Router from 'vue-router'
import BranchManagement from '@/components/BranchManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BranchManagement',
      component: BranchManagement
    }
  ]
})
