import { test, expect } from '@playwright/test';

test('test case AC-01 Transfer money', async ({ page }) => {
  //Login with valid credentials 
  await page.goto('http://localhost:8080/parabank');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('shimaaelbateen4');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');
  await page.getByRole('button', { name: 'Log In' }).click();

  //Change Initial balance
  await page.getByRole('link', { name: 'Admin Page' }).click();
  await page.locator('#initialBalance').click();
  await page.locator('#initialBalance').fill('3500000');
  await page.getByRole('button', { name: 'Submit' }).click();

  //Create 3 accounts
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByRole('button', { name: 'Open New Account' }).click();
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByRole('button', { name: 'Open New Account' }).click();
  await page.getByRole('link', { name: 'Open New Account' }).click();
  await page.getByRole('button', { name: 'Open New Account' }).click();
  await page.getByRole('link', { name: 'Accounts Overview' }).click();

  //Check the total balance
  await expect(page.getByText('$3500,000.00')).toHaveText('$3500,000.00', { timeout:60000 });

  //transfer from - to same account
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.getByRole('link', { name: 'home', exact: true }).click();
  await page.locator('#leftPanel').getByRole('link', { name: 'Transfer Funds' }).click();
  await page.locator('xpath=//*[@id="amount"]').click();
  await page.locator('xpath=//*[@id="amount"]').fill('100');
  await page.locator('#fromAccountId').click();
  await page.locator('#fromAccountId').selectOption('30660');
  await page.locator('#toAccountId').selectOption('30660');
  await page.getByRole('button', { name: 'Transfer' }).click();
  await expect(page.getByRole('heading', { name: 'Transfer Complete!' })).toHaveText('Transfer Complete!', { timeout:60000 });

  //transfer amount more than the balance in account
  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await page.locator('xpath=//*[@id="amount"]').click();
  await page.locator('xpath=//*[@id="amount"]').fill('400');
  await page.locator('#fromAccountId').selectOption('30771');
  await page.locator('#toAccountId').selectOption('30660');
  await page.getByRole('button', { name: 'Transfer' }).click();
  await expect(page.getByRole('heading', { name: 'Transfer Complete!' })).toBeVisible({timeout:60000});
});