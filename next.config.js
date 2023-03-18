/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_URL: 'http://localhost:8800/api/'
  }
}

module.exports = nextConfig
