/** @type {import('next').NextConfig} */
const config = {
  distDir: '.next',
  // Set the root directory to src/frontend
  dir: 'src/frontend',
  // Other Next.js config options
  reactStrictMode: true,
  swcMinify: true,
}

export default config
