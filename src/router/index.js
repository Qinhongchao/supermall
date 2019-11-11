import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'
import Category from 'views/category/Category'
import Detail from 'views/detail/Detail'

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
       redirect:"/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/detail/:iid",
        component: Detail
    }
]

const router = new VueRouter({
    routes
})

export default router