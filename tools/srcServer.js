import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../configs/webpack.configs.dev';
import open from 'open';
import colors from 'colors';

import httpProxy from 'http-proxy';
const proxy = httpProxy.createProxyServer();//创建一个代理

const port = 3012;
const app = express();
const compiler = webpack(config);

let webpackDevMiddlewareInstance = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    quiet: true
});

app.use(webpackDevMiddlewareInstance);

app.use(require('webpack-hot-middleware')(compiler));

app.use('/api/*', (req, res) => {
    let proxiedUrl = req.baseUrl;
    const url = require('url');
    let url_parts = url.parse(req.url, true);
    if (url_parts.search !== null) {
        proxiedUrl += url_parts.search;
    }
    req.url = proxiedUrl;

    proxy.web(req, res, {
        target: {
            host: 'localhost',
            port: 8080
        }
    });
});

app.get('*', function(req, res, next) {
    let filename = path.join(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result) {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(port, function(err) {
    if (err) {
        console.error(err);
    } else {
        webpackDevMiddlewareInstance.waitUntilValid(() => {
            open(`http://localhost:${port}`);
        });
    }
});