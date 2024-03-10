/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i0.wp.com" }],
  },
};

export default nextConfig;
