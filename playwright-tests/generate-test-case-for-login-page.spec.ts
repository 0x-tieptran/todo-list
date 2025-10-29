import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');
  const emailInput = page.getByLabel('Email');
  await expect(emailInput).toBeVisible();
  await emailInput.fill('test@example.com');
  await expect(emailInput).toHaveValue('test@example.com');
  const loginButton = page.getByRole('button', { name: 'Login' });
  await expect(loginButton).toBeVisible();
  await loginButton.click();
  const errorMessage = page.getByText('Invalid email or password');
  await expect(errorMessage).toBeVisible();
});