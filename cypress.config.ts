import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    charts: false,
    html: true,
    json: false,
    reportDir: 'reports',
    reportFilename: 'report'
},
  e2e: {
    video: false,
    viewportHeight: 1792,
    viewportWidth: 828 ,
    baseUrl:'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    env:{
      password:'secret_sauce',
      standartUser: 'standard_user',
      lockedUser: 'locked_out_user',
      problemUser: 'problem_user',
      performanceUser: 'performance_glitch_user'
    }
  },
});