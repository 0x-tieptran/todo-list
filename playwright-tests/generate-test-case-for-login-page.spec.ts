```typescript
import { test, expect } from '@playwright/test';

test('Test Case: Generate test case for login page', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/');
  await expect(page).toHaveTitle(/Todo List/);
  await expect(page.getByRole('heading', { name: /Login/i })).toBeVisible();
  await page.getByPlaceholder('Username').fill('testuser');
  await page.getByPlaceholder('Password').fill('testpass');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Welcome, testuser')).toBeVisible();
});
```