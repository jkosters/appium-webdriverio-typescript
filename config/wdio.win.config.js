/**
 * WebdriverIO config file to run tests on native mobile apps.
 * Config file helps us configure all the settings and setup environments
 * to run our tests.
 */

const host = '127.0.0.1';   // default appium host
const port = 4730;          // default appium port

const waitforTimeout = 30 * 60000;
const commandTimeout = 30 * 60000;

exports.config = {
    debug: false,
    specs: [
        './features/appium.feature',
    ],

    reporters: ['allure','spec'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },

    host: host,
    port: port,

    maxInstances: 1,

    capabilities: [
        {
            appiumVersion: '1.13.0',
            app: 'C:\\Program Files\\WindowsApps\\Microsoft.WindowsCalculator_10.1903.21.0_x64__8wekyb3d8bbwe\\Calculator.exe',          // Path to your native app
            platformName: 'Windows',
            deviceName: 'WindowsPC', // device name is mandatory
            waitforTimeout: waitforTimeout,
            commandTimeout: commandTimeout,
            newCommandTimeout: 30 * 60000,
        }
    ],

    services: ['appium'],
    appium: {
        waitStartTime: 6000,
        waitforTimeout: waitforTimeout,
        command: 'appium.cmd',
        logFileName: 'appium.log',
        args: {
            address: host,
            port: port,
            commandTimeout: commandTimeout,
            sessionOverride: true,
            debugLogSpacing: true
        }
    },

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    framework: 'cucumber',          // cucumber framework specified
    cucumberOpts: {
        compiler: ['ts:ts-node/register'],
        backtrace: true,
        failFast: false,
        timeout: 5 * 60 * 60000,
        require: ['./stepDefinitions/appiumSteps.ts']   // importing/requiring step definition files
    },

    /**
     * hooks
     */
    onPrepare: function () {
        console.log('<<< BROWSER TESTS STARTED >>>');
    },

    before: function (capabilities, specs) {
        browser.url(this.baseUrl);
    },

    afterScenario: function (scenario) {
       browser.screenshot();
    },

    onComplete: function () {

        console.log('<<< TESTING FINISHED >>>');
    }

};