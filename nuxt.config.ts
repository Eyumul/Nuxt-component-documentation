export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
  ], 
})