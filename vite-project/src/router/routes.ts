//暴露常量路由
export const constantRoute = [
    {
        //登录页面
        name: 'login',
        path: '/',
        component: () => import('@/views/login/index.vue')

    },
    {
        //登录成功页面
        name: 'lagout',
        path: '/home',
        component: () => import('@/views/home/index.vue')
    },
    {
        //404
        name: '404',
        path: '/404',
        component: () => import('@/views/404/index.vue')
    },
    {
        //任意路由未匹配到时跳转404
        name: 'any',
        path: '/:pathMatch(.*)*',
        redirect: '/404'
    }
]