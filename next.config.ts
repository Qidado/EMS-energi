import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/priser", destination: "/#priser", permanent: true },
      { source: "/om-os", destination: "/#hvad-er-ems", permanent: true },
      { source: "/kontakt", destination: "/#find-os", permanent: true },
    ];
  },
};

export default nextConfig;
