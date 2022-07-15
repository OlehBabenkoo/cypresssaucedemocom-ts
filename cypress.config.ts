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
     accounts:{
      standart:{
        userName:'standart_user',
        password:'secret_sause'
      },
      locked:{
        userName:'locked_out_user',
        password:'secret_sause'
      },
      problem:{
        userName:'problem_user',
        password:'secret_sause'
      },
      performance:{
        userName:'performance_glitch_user',
        password:'secret_sause'
      },
     }
    }
  },
});