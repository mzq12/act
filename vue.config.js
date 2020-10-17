module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    proxy: {
      "^/v1": {
        target: "http://api.wfas.org.cn",
        changeOrigin: true
      }
    }
  }
};
