import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    video: false,
    viewportHeight: 1792,
    viewportWidth: 828 ,
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false
  }
})