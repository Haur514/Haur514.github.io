/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
    output: "export",
    productionBrowserSourceMaps: true,
    assetPrefix: process.env.GITHUB_PAGES ? '/repository-name' : '',
}

module.exports = nextConfig
