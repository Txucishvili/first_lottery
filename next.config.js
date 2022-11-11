/** @type {import('next').NextConfig} */

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
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
