import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/login');

  const emailInput = await page.getByLabel('Email');
  await emailInput.fill('test@example.com');
  expect(await emailInput.inputValue()).toBe('test@example.com');

  const passwordInput = await page.getByLabel('Password');
  await passwordInput.fill('password123');
  expect(await passwordInput.inputValue()).toBe('password123');

  const loginButton = await page.getByRole('button', { name: 'Login' });
  await loginButton.click();

  const errorMessage = await page.getByText('Invalid email or password');
  expect(await errorMessage.isVisible()).toBe(true);
});