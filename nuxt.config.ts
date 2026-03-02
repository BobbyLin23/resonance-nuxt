// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 3031,
  },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    'shadcn-nuxt',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@clerk/nuxt',
    '@nuxt/image',
  ],
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'bunny',
      },
      {
        name: 'Geist_Mono',
        provider: 'bunny',
      },
    ],
  },
})