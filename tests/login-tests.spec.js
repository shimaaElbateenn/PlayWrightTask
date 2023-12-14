import { test, expect } from '@playwright/test';

test('valid login test', async ({ page }) => {
  await page.goto('http://localhost:8080/parabank');
  await page.locator('input[name="username"]').fill('shimaaelbateen4');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');
  await page.getByRole('button', { name: 'Log In' }).click();
  await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toContainText('Accounts Overview', { timeout:60000 });
});

test('invalid login test', async ({ page }) => {
    await page.goto('http://localhost:8080/parabank');
    await page.locator('input[name="username"]').fill('shimaaahmed');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('password');
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByRole('heading', { name: 'Error!' })).toBeVisible({timeout:60000});
    await expect(page.getByText('The username and password')).toContainText("The username and password could not be verified.", { timeout:60000 });
});