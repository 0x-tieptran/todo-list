import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');
  const emailInput = await page.getByLabel('Email');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('test@example.com');
  const emailValue = await emailInput.inputValue();
  await expect(emailValue).toBe('test@example.com');
  // Assuming there's a login button with text 'Login'
  const loginButton = await page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();
  await loginButton.click();
  // Assuming a successful login redirects to a dashboard, checking URL
  await expect(page).toHaveURL('https://fake-todo-list.vercel.app/dashboard');
});