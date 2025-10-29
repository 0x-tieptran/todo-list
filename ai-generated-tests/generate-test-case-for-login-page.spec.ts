import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');
  const emailInput = await page.getByLabel('Email');
  await emailInput.fill('test@example.com');
  await expect(emailInput).toHaveValue('test@example.com');
});