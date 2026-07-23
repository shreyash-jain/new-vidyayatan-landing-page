/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Existing Plasmic-hosted assets we still reference until re-hosted.
      { protocol: "https", hostname: "site-assets.plasmic.app" },
      { protocol: "https", hostname: "img.plasmic.app" },
    ],
  },
  async redirects() {
    return [
      // Preserve SEO from the old Plasmic URLs.
      { source: "/product-page", destination: "/products", permanent: true },
      {
        source: "/bharatpe-case-study",
        destination: "/products/bharatpe",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
