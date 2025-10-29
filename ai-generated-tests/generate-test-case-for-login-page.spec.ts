import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');

  const emailInput = page.getByLabel('Email');
  await emailInput.fill('test@example.com');
  await expect(emailInput).toHaveValue('test@example.com');

  const passwordInput = page.getByLabel('Password');
  await passwordInput.fill('password123');
  await expect(passwordInput).toHaveValue('password123');

  const loginButton = page.getByRole('button', { name: 'Login' });
  await loginButton.click();

  await expect(page).toHaveURL('https://fake-todo-list.vercel.app/todos');
});