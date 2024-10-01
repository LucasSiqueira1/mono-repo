// // import { fileURLToPath } from "url";
// // import path from "path";

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);

// const nextConfig = {
//   // experimental: {
//   //   externalDir: true,
//   // },
//   // externalDir: true,

//   transpileModules: ["@shared"],
//   // webpack: (config) => {
//   //   // Configurando o alias para o pacote my-app no monorepo
//   //   config.resolve.alias["@shared"] = path.resolve(
//   //     __dirname,
//   //     "packages/my-app"
//   //   );

//   //   return config;
//   // },
// };

// export default nextConfig;
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  transpilePackages: ["@shared"],
  // webpack: (config) => {
  //   config.resolve.alias["@shared"] = path.resolve(
  //     __dirname,
  //     "packages/my-app"
  //   );
  //   return config;
  // },
};

module.exports = nextConfig;
