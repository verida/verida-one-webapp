const webpack = require("webpack");
module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    util: require.resolve("util"),
    url: require.resolve("url"),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: [require.resolve("buffer/"), "Buffer"]
    }),
  ]);
  return config;
};