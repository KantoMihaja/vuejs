module.exports = {
  presets: ["@vue/app"],
};

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("videos")
      .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/videos/[name].[hash:8].[ext]",
      });
  },
};

module.exports = {
  presets: [
    '@babel/preset-env'
  ],
  plugins: [
    // Add your Babel plugins here
  ]
};
