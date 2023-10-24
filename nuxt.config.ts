// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@storyblok/nuxt',
      { accessToken: process.env.STORYBLOK_ACCESS_TOKEN, apiOptions: { region: 'us' } },
    ],
    '@nuxtjs/tailwindcss',
  ],
  ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production',
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  devtools: { enabled: true },
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem',
    },
  },
});
