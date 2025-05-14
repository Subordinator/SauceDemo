import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'playwright-report/report.json' }],
  ],

  use: {
    trace: 'on-first-retry',
  },

  projects: [

    {
      name: 'Chromium Engine',
      use: { ...devices['Desktop Chrome'] },
    },

    /*
    {
      name: 'Microsoft Edge • Desktop',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    */
    
    {
      name: 'Google Chrome • Desktop',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },

    {
      name: 'Google Chrome • Pixel 5',
      use: { ...devices['Pixel 5'] },
    },

    {
      name: 'Webkit Engine',
      use: { ...devices['Desktop Safari'] },
    },
    
    {
      name: 'Safari • iPhone 12',
      use: { ...devices['iPhone 12'] },
    },

    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});
