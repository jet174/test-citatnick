import Vue from 'vue'
import Router from 'vue-router'
import Page_1 from '@/components/Page_1'
import Page_Add from '@/components/Page_Add'
import Page_reading from '@/components/Page_reading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Page_1',
      component: Page_1
    },
	{
      path: '/add',
      name: 'Page_Add',
      component: Page_Add
    },
      {
          path: '/reading',
          name: 'Page_reading',
          component: Page_reading
      }
  ]
})
