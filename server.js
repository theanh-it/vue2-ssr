const server = require('express')
const vueServerRender = require('vue-server-renderer')
const fs = require('fs')
const path = require('path')
const app = server()

const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync(path.resolve(__dirname, './dist/index.ssr.html'), 'utf8')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const render = vueServerRender.createBundleRenderer(serverBundle, {
    template,
    clientManifest
});

app.get('/', (req, res) => {
    let context = {
        url: req.url
    }
    render.renderToString(context, (err, html) => {
        res.send(html);
    })
})

app.use(server.static(path.resolve(__dirname, 'dist')))
app.use("/public", server.static(path.join(__dirname, "./public")));

app.get('*', (req, res) => {
    let context = {
        url: req.url
    }
    render.renderToString(context, (err, html) => {
        if(err) console.log(err);
        res.send(html)
    })
})
app.listen(5000, () => {
    console.log("server: http://localhost:" + 5000);
});