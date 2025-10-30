import { test, expect } from '@playwright/test';

test('Test Case: Login', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/');

  await page.getByRole('textbox', { name: '' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('dialog').click();

  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.getByRole('dialog')).toBeVisible();
});