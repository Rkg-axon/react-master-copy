/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')();
const nextConfig = withNextIntl({
    env: {
        REACT_APP_IMAGES_PATH: 'assets/images',
      },
});


module.exports = nextConfig
