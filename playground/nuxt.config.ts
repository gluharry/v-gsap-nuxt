import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-28',
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  vgsap: {
    presets: [
      {
        name: 'spin',
        modifiers: 'infinitely.to',
        value: { rotate: '90deg', ease: 'linear' },
      },
    ],
  },
})
