export default function auth({ store, next, nextMiddleware }) {
    const token = process.browser ? localStorage.token : true;
    if (!token) return next({name: 'login'});
    return nextMiddleware;
}