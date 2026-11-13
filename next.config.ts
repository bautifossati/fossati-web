import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100 % estático: `npm run build` genera la carpeta /out.
  output: "export",
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
