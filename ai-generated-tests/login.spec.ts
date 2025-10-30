import { test, expect } from '@playwright/test';

test('Test Case: Login', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/');
  await page.locator('input#mat-input-0').click();
  await page.locator('span.mdc-button__label > span').click();
  await page.locator('div.mat-mdc-form-field-infix').click();
});