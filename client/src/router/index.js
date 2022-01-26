import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Rangking from '../views/Rangking.vue'
import RangkingManSingle from '../views/RangkingManSingle'
import RangkingManDouble from '../views/RangkingManDouble'
import RangkingWomanDouble from '../views/RangkingWomanDouble'
import RangkingMixDouble from '../views/RangkingMixDouble'
import RangkingWomanSingle from '../views/RangkingWomanSingle'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/rangking',
    name: 'Rangking',
    component: Rangking,
    children: [{
        path: 'ms',
        component: RangkingManSingle
      },
      {
        path: 'md',
        component: RangkingManDouble
      },
      {
        path: 'ws',
        component: RangkingWomanSingle
      },
      {
        path: 'wd',
        component: RangkingWomanDouble
      },
      {
        path: 'xd',
        component: RangkingMixDouble
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const login = localStorage.getItem('token')
  if (!login && to.name === "Home") {
    next({
      name: "Login"
    })
  } else if (!login && to.name === "Rangking") {
    next({
      name: "Login"
    })
  } else if (login && to.name === "Login") {
    next({
      name: "Home"
    })
  } else {
    next()
  }
})

export default router