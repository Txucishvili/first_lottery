/** @type {import('next').NextConfig} */
const { version } = require('./package.json');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { GitRevisionPlugin } = require("git-revision-webpack-plugin");
const gitRevisionPlugin = new GitRevisionPlugin({ lightweightTags: true });

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // cssModules: true,
  publicRuntimeConfig: {
    version,
  },
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ["flagicons.lipis.dev"],
  },
  sassOptions: {
    includePaths: [
      path.join(__dirname, "styles"),
    ],
    prependData: `
      @import "sassync";
      @import "styles/variables.scss";
      @import "styles/mixins.scss";
    `, // prepend _css variables in all css documents
  },
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: '/fonts/AvenirNextGeorgian-Regular.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
    ]
  },
  webpack: (
    config,
    // options
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
) => {
    // plugins don't work in the main object above
    config.plugins.push(new webpack.DefinePlugin({
        VERSION: JSON.stringify(gitRevisionPlugin.version() || "unknown"),
        LASTCOMMITDATETIME: JSON.stringify(gitRevisionPlugin.lastcommitdatetime())
    }))
    // Important: return the modified config
    return config
},
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.(le|c)ss$/,
  //     use: [
  //       MiniCssExtractPlugin.loader,
  //       {
  //         loader: 'css-loader'
  //       },
  //       {
  //         loader: 'style-loader',
  //         options: {
  //           sourceMap: true
  //         }
  //       },
  //       {
  //         loader: 'less-loader',
  //         options: {
  //           sourceMap: true
  //         }
  //       },
  //       {
  //         loader: 'sass-loader',
  //         options: {
  //           sourceMap: true
  //         }
  //       }
  //       ,
  //     ]
  //   });    

  //   config.plugins.push(
  //     new MiniCssExtractPlugin({
  //       filename: 'static/css/[name].css',
  //       chunkFilename: 'static/css/[contenthash].css'
  //     })
  //   );

  //   return config;
  // }
}

module.exports = nextConfig
// module.exports = withCSS(nextConfig)
