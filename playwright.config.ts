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
    trace: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com/v1/',
  },
  projects: [
    {
      name: 'Chromium Engine',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Microsoft Edge Desktop',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome Desktop',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    {
      name: 'Google Chrome Mobile',
      use: {
        ...devices['Pixel 5'],
        headless: true,
      },
    },
    {
      name: 'Webkit Engine',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Safari Mobile',
      use: {
        ...devices['iPhone 12'],
        headless: true,
      },
    },
    {
      name: 'Firefox Desktop',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});