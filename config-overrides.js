const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};

  Object.assign(fallback, {
    assert: false,
    crypto: require.resolve("crypto-browserify"),
    fs: false,
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    net: false,
    os: false,
    path: false,
    stream: require.resolve("stream-browserify"),
    tls: false,
    url: require.resolve("url"),
    util: require.resolve("util"),
    zlib: false,
    async_hooks: false,
  });
  config.resolve.fallback = fallback;

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: [require.resolve("buffer/"), "Buffer"],
    }),
  ]);

  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf instanceof Array) {
      rule.oneOf[rule.oneOf.length - 1].exclude = [
        /\.(js|mjs|jsx|cjs|ts|tsx)$/,
        /\.html$/,
        /\.json$/,
      ];
    }
    return rule;
  });

  // Ignore some warnings
  config.ignoreWarnings = [
    /Failed to parse source map/, // until fixed by cra https://github.com/facebook/create-react-app/pull/11752
  ];

  return config;
};
