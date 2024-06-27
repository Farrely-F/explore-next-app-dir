/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   ppr: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
