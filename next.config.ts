import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repoBasePath = "/Castle-of-the-Last-Warden";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? repoBasePath : "",
  assetPrefix: isGitHubPages ? `${repoBasePath}/` : undefined,
};

export default nextConfig;
