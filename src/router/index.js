import { createRouter, createWebHashHistory } from 'vue-router'
import MainBox from '../views/MainBox'
import Login from '../views/Login.vue'
import RoutesConfig from './config'
import store from '@/store'

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/mainbox",
    name: "mainbox",
    component: MainBox
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/MainBox.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//每次路由跳转之前
router.beforeEach((to, from, next) => {
  if (to.name === "login") {
    next()
  } else {
    //如果授权过，next()
    //未授权，重定向到login
    if (!localStorage.getItem("token")) {
      next({
        path: "/login"
      })
    } else {
      if (!store.state.isGetterRouter) {
        configRouter()
        next(to.fullPath)
      } else {
        next()
      }

    }
  }
})

const configRouter = () => {
  RoutesConfig.forEach(item => {
    router.addRoute("mainbox", item)
  });

  //改变isGetterRouter = true
  store.commit("changeGetterRouter",true)
}


export default router
