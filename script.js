const browserSync = require('browser-sync');
const url = require('url');
const proxyMiddleware = require('proxy-middleware');

const bs = browserSync.create();

const proxyOptions = url.parse('https://qiita.com/api');
proxyOptions.route = '/api';
// proxyOptions.auth = 'username:password';

bs.init({
  server: {
    baseDir: './src',
    middleware: [proxyMiddleware(proxyOptions)],
  },
  watch: true,
  ghostMode: false,
});
