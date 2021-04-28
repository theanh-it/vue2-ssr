export default {
    path: '/admin',
    name: "admin",
    component: () =>
        import ("../views/admin/layout/Index.vue"),
    redirect: {
        name: 'admin.index'
    },
    meta:{
        middleware:[]
    },
    children: [
        {
            path: 'home',
            name: "admin.index",
            component: () => import ('../views/admin/home/Index.vue')
        }
    ]
}