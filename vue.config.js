module.exports = {
  //自行复制黏贴
  devServer: {
    port: 4320,
    host: "0.0.0.0",
    open: false,
    compress: true,
    disableHostCheck: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "max-age=300",
    },
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/api": {
        // target: "http://119.3.26.182:3000/api/",
        // target: "http://119.3.26.182:3008/api/",
        target: "http://localhost:3008",
        // pathRewrite: { "^/api": "" },
      },
    },
  },
};
