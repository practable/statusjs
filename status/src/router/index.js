import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
	{
      path: '/details/:id',
      name: 'details',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailsView.vue')
    },
	{
    path: "/:catchAll(.*)",
		component: () => import('../views/NotFound.vue'),
  },
  
  ]
})


//https://stackoverflow.com/questions/45091380/vue-router-keep-query-parameter-and-use-same-view-for-children
function hasQueryParams(route) {
  return !!Object.keys(route.query).length;
}

router.beforeEach((to, from, next) => {
  if (!hasQueryParams(to) && hasQueryParams(from)) {
    next({ ...to, query: from.query });
  } else {
    next();
  }
});


export default router
