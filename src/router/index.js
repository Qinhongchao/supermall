import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'
import Category from 'views/category/Category'

Vue.use(VueRouter)

const routes = [{
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: Category
    }
]

const router = new VueRouter({
    routes
})

export default router