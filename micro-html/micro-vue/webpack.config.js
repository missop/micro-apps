const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const WebpackSystemRegister = require("webpack-system-register");
module.exports = {
  entry: {
    buylist: "./src/BuyList.vue",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/i,
        use: "vue-loader",
      },
    ],
  },
  plugins: [new VueLoaderPlugin(), new WebpackSystemRegister({})],
};
