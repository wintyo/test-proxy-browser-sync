const browserSync = require('browser-sync');
const { createProxyMiddleware } = require('http-proxy-middleware');

const bs = browserSync.create();

bs.init({
  server: {
    baseDir: './src',
    middleware: [
      createProxyMiddleware('/api', {
        target: 'https://qiita.com/',
        // auth: 'username:password',
        changeOrigin: true,
      }),
    ],
  },
  watch: true,
  ghostMode: false,
});
