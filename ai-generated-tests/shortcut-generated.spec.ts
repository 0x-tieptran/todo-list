import { test, expect } from '@playwright/test';

test('Login with Incorrect Credentials', async ({ page }) => {
  await page.goto('https://app.webapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('wronguser');
  await page.getByRole('textbox', { name: 'Password' }).fill('wrongpass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid username or password')).toBeVisible();
});

test('Password Reset', async ({ page }) => {
  await page.goto('https://app.webapp.com/login');
  await page.getByRole('link', { name: 'Forgot Password?' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('user@example.com');
  await page.getByRole('button', { name: 'Reset Password' }).click();
  await expect(page.locator('text="Password reset link sent to your email"')).toBeVisible();
});

test('Successful Login', async ({ page }) => {
  await page.goto('https://app.webapp.com/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('correctuser');
  await page.getByRole('textbox', { name: 'Password' }).fill('correctpass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/dashboard/);
});