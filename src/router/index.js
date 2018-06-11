import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../modules/dashboard/Dashboard'
import Platform from '../modules/platform/Platform'
import Home from '../modules/platform/home/Home'
import NewRelease from '../modules/platform/newRelease/NewRelease'
// 错误处理
import NotFound from '../modules/error/NotFound'

Vue.use(Router);

export default new Router({
    routes: [
        // 路由不存在的时候出现页面
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
        // 路由'/'重定向
        {
            path: '/',
            redirect: '/platform/home'
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/platform',
            name: 'platform',
            component: Platform,
            children: [
                {
                    path: '/platform/home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/platform/newRelease',
                    name: 'newRelease',
                    component: NewRelease
                }
            ]
        }
    ]
})
