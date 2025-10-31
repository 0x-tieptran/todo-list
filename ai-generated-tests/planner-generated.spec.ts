import { test, expect } from '@playwright/test';

test('Verify Adding Todo Item', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  const input = page.getByRole('textbox');
  await input.fill('Buy groceries');
  const addButton = page.getByRole('button', { name: /add/i });
  await addButton.click();
  await expect(page.getByText('Buy groceries')).toBeVisible();
});

test('Verify Editing Todo Item', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  const newTodoInput = page.getByRole('textbox');
  const todoListItems = page.locator('li');
  const count = await todoListItems.count();
  if (count === 0) {
    await newTodoInput.fill('Sample Todo');
    await page.getByRole('button', { name: /add/i }).click();
  }
  const todoToEdit = page.locator('li').first();
  await todoToEdit.click();
  await newTodoInput.fill('Edited Todo');
  await newTodoInput.press('Enter');
  await expect(todoToEdit).toHaveText('Edited Todo');
});

test('Verify Deleting Todo Item', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  const deleteButtons = page.getByRole('button', { name: /delete/i });
  let count = await deleteButtons.count();
  if (count === 0) {
    await page.getByRole('textbox').fill('New Item to Delete');
    await page.getByRole('button', { name: /add/i }).click();
    count = 1;
  }
  await deleteButtons.first().click();
  await expect(page.getByRole('button', { name: /delete/i }).count()).resolves.toBeLessThan(count);
});

test('Verify Marking Todo Item as Complete', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/todos');
  const todoItems = page.locator('li');
  const count = await todoItems.count();
  if (count === 0) {
    await page.getByRole('textbox').fill('Task to Complete');
    await page.getByRole('button', { name: /add/i }).click();
  }
  const firstTodo = todoItems.first();
  const checkbox = firstTodo.getByRole('checkbox');
  await checkbox.check();
  await expect(checkbox).toBeChecked();
  await expect(firstTodo).toHaveClass(/completed|done|checked/);
});