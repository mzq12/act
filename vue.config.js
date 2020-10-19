module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    host: "wfas.org.cn",
    port: 80,
    proxy: {
      "^/v1": {
        target: "http://api.wfas.org.cn",
        changeOrigin: true
      }
    }
  }
};
