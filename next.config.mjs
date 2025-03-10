import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'user-images.githubusercontent.com'],
  },
};

export default withMDX(config);
