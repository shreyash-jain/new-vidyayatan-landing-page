/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for Cloudflare Pages. Every page is prerendered; the only
  // dynamic piece (the contact→CRM handler) is a Cloudflare Pages Function
  // at functions/api/contact.ts. Redirects live in public/_redirects (the
  // next.config redirects() API is not supported with output: "export").
  output: "export",
  images: {
    // Cloudflare Pages serves assets directly; the Next image optimizer isn't
    // available on static export.
    unoptimized: true,
  },
};

export default nextConfig;
