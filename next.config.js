/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce
      // file size.
      displayName: true,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      fileName: true,
      // Empty by default.
      topLevelImportPaths: [],
      // Defaults to ["'index"].
      meaninglessFileNames: ["index"],
      // Enabled by default.
      cssProp: true,
      // Empty by default.
      namespace: "",
      // Not supported yet.
      minify: false,
      // Not supported yet.
      transpileTemplateLiterals: false,
      // Not supported yet.
      pure: false,
    },
  },
};

module.exports = nextConfig;
