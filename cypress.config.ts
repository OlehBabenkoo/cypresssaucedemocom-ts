import {defineConfig} from 'cypress';

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
        viewportWidth: 828,
        baseUrl: 'https://www.saucedemo.com/',
        chromeWebSecurity: false,
        env: {
            accounts: {
                standard: {
                    userName: 'standard_user',
                    password: 'secret_sauce'
                },
                locked: {
                    userName: 'locked_out_user',
                    password: 'secret_sauce'
                },
                problem: {
                    userName: 'problem_user',
                    password: 'secret_sauce'
                },
                performance: {
                    userName: 'performance_glitch_user',
                    password: 'secret_sauce'
                },
            },
            sort:{
                NameAtoZ : {
                    text:'Name (A to Z)'
                },
                NameZtoA : {
                    text:'Name (Z to A)'
                },
                PriceLowToHigh : {
                    text:'Price (low to high)'
                },
                PriceHighToLow : {
                    text:'Price (high to low)'
                }
            },
            price:{
                lowPrice:'7.99',
                highPrice:'49.99'
            }
        }
    },
});