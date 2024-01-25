import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './src/tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  //reporter: process.env.CI ? 'blob' : 'html',
  use: {
     baseURL: 'https://todolist.james.am/#/',
     trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});
