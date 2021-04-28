import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import store from "../store";

import middlewarePipeline from './middlewarePipeline';

import publicRouter from "./public";
import adminRouter from "./admin";

Vue.use(VueRouter)
Vue.use(VueMeta, {
    refreshOnceOnNavigation: true
})

export default () => {
    const router = new VueRouter({
        mode: 'history',
        routes: [{...adminRouter},{...publicRouter}],
        scrollBehavior(to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    });
    router.beforeEach((to, from, next) => {
        const middleware = to.matched.reduce((results, obj) => {
            if (obj.meta.middleware) return results = results.concat(obj.meta.middleware);
            return results;
        }, []);
        if (middleware.length == 0) return next();

        const context = {
            to,
            from,
            store,
            next
        }
        return middleware[0]({
            ...context,
            nextMiddleware: middlewarePipeline(context, middleware, 1)
        })
    })
    return router
}