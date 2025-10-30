import { test, expect } from '@playwright/test';

test('Test Case: Login', async ({ page }) => {
  await page.goto('https://fake-todo-list.vercel.app/');

  await page.locator('input#mat-input-0').click();
  await page.locator('html > body > app-root > main.main-container > app-login > div.centered-form-container > mat-card.mat-mdc-card.mdc-card.centered-card > mat-card-actions.mat-mdc-card-actions.mdc-card__actions.mat-mdc-card-actions-align-end > button.mdc-button.mat-mdc-button-base.mdc-button--raised.mat-mdc-raised-button.mat-primary.cdk-focused.cdk-mouse-focused > span.mdc-button__label > span').click();
  await page.locator('html > body > app-root > main.main-container > app-login > div.centered-form-container > mat-card.mat-mdc-card.mdc-card.centered-card > mat-card-content.mat-mdc-card-content > form.ng-untouched.ng-pristine.ng-valid > mat-form-field.mat-mdc-form-field.full-width.mat-mdc-form-field-type-mat-input.mat-form-field-appearance-outline.mat-primary.ng-untouched.ng-pristine.ng-valid.mat-form-field-animations-enabled > div.mat-mdc-text-field-wrapper.mdc-text-field.mdc-text-field--outlined > div.mat-mdc-form-field-flex > div.mat-mdc-form-field-infix').click();

  await expect(page.locator('text=Welcome to the Fake Todo List')).toBeVisible();
  await expect(page.locator('html > body > app-root > main.main-container > app-login > div.centered-form-container > mat-card.mat-mdc-card.mdc-card.centered-card > mat-card-title.mat-mdc-card-title.mdc-card__title')).toContainText('Login');
});