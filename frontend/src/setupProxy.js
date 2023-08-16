const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports = function(app) {

  app.use(
    '/myServer',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );

  app.use(
    '/payment',
    createProxyMiddleware({
      target: 'http://localhost:5252',
      changeOrigin: true,
    })
  );
};