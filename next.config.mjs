/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i0.wp.com" },
      { protocol: "https", hostname: "salt.tikicdn.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
