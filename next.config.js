// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [], // Adicione os domínios de imagens se necessário
  },
  env: {
    API_URL: process.env.API_URL, // Variáveis de ambiente, configure na Vercel
  },
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
  },
  async rewrites() {
    return [
      { source: '/(.*)', destination: '/' }, // Redireciona todas as rotas para a página inicial
    ];
  },
};

module.exports = nextConfig;
