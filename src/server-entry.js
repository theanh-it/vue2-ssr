import createApp from './main'
export default (context) => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp()
        router.push(context.url)
        router.onReady(() => {
            const components = router.getMatchedComponents()
            Promise.all(components.map(component => {
                if (component.asyncData) return component.asyncData({ store })
            })).then(() => {
                context.state = store.state
                context.meta = app.$meta()
                resolve(app)
            })
        }, reject);
    });
}