// import { fileURLToPath } from "url";
// import path from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const nextConfig = {
  experimental: {
    externalDir: true,
  },

  transpileModules: ["@shared"],
  // webpack: (config) => {
  //   // Configurando o alias para o pacote my-app no monorepo
  //   config.resolve.alias["@shared"] = path.resolve(
  //     __dirname,
  //     "packages/my-app"
  //   );

  //   return config;
  // },
};

export default nextConfig;
