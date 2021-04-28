export default {
    path: '/',
    name: "home",
    component: () => import ("../views/public/layout/Index.vue"),
    redirect: {
        name: 'index'
    },
    children: [
        {
            path: '',
            name: "index",
            component: () => import ('../views/public/home/Index.vue')
        }
    ]
}