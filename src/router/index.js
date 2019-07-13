import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home'
import login from '@/views/login'
import my from '@/views/my'
import director from '@/views/director'
import order from '@/views/order'
import add from '@/views/add'
import detil from "@/views/detil"
Vue.use(Router)

const router =  new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      
    },
    {
      path: '/order',
      name: 'order',
      component:order
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    
    {
      path: '/director',
      name: 'director',
      component: director
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/add',
      name: 'add',
      component: add
    },
    
    {
      path: '/detil/:id',
      name: 'detil',
      component: detil
    }
  ]
})


export default  router;

const arr = ["my"]

router.beforeEach((to,from,next)=>{
  if(arr.includes(to.name)){
    let useId = window.localStorage.getItem('useId') || "";

    if(useId){
      next();
    }else{
      next('/login')
    }
  }else{
    next()
  }
})