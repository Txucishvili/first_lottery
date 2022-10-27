/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
}

module.exports = nextConfig
