import { test, expect } from '@playwright/test';

test('test case AC-03 Pay Bill', async ({ page }) => {
  //Login with valid credentials 
  await page.goto('http://localhost:8080/parabank/index.htm');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('shimaaelbateen4');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');
  await page.locator('input[name="password"]').press('Enter');

  //Pay the bill less than 3,500,000
  await page.getByRole('link', { name: 'Bill Pay' }).click();
  await page.locator('input[name="payee\\.name"]').click();
  await page.locator('input[name="payee\\.name"]').fill('shimaa');
  await page.locator('input[name="payee\\.address\\.street"]').click();
  await page.locator('input[name="payee\\.address\\.street"]').fill('21st Syof');
  await page.locator('input[name="payee\\.address\\.city"]').click();
  await page.locator('input[name="payee\\.address\\.city"]').fill('Alexandria');
  await page.locator('input[name="payee\\.address\\.state"]').click();
  await page.locator('input[name="payee\\.address\\.state"]').fill('Alexandria');
  await page.locator('input[name="payee\\.address\\.zipCode"]').click();
  await page.locator('input[name="payee\\.address\\.zipCode"]').fill('09654');
  await page.locator('input[name="payee\\.phoneNumber"]').click();
  await page.locator('input[name="payee\\.phoneNumber"]').fill('01028476335');
  await page.locator('input[name="payee\\.accountNumber"]').click();
  await page.locator('input[name="payee\\.accountNumber"]').fill('30882');
  await page.locator('input[name="verifyAccount"]').click();
  await page.locator('input[name="verifyAccount"]').fill('30882');
  await page.locator('input[name="amount"]').click();
  await page.locator('input[name="amount"]').fill('1000');
  await page.getByRole('combobox').selectOption('30660');
  await page.getByRole('button', { name: 'Send Payment' }).click();
  await expect(page.getByRole('heading', { name: 'Bill Payment Complete' })).toHaveText('Bill Payment Complete', { timeout:30000 });

  //Pay the bill more than 3,500,000
  await page.getByRole('link', { name: 'Bill Pay' }).click();
  await page.locator('input[name="payee\\.name"]').click();
  await page.locator('input[name="payee\\.name"]').fill('shimaa');
  await page.locator('input[name="payee\\.address\\.street"]').click();
  await page.locator('input[name="payee\\.address\\.street"]').fill('21st Syof');
  await page.locator('input[name="payee\\.address\\.city"]').click();
  await page.locator('input[name="payee\\.address\\.city"]').fill('Alexandria');
  await page.locator('input[name="payee\\.address\\.state"]').click();
  await page.locator('input[name="payee\\.address\\.state"]').fill('Alexandria');
  await page.locator('input[name="payee\\.address\\.zipCode"]').click();
  await page.locator('input[name="payee\\.address\\.zipCode"]').fill('09654');
  await page.locator('input[name="payee\\.phoneNumber"]').click();
  await page.locator('input[name="payee\\.phoneNumber"]').fill('01028476335');
  await page.locator('input[name="payee\\.accountNumber"]').click();
  await page.locator('input[name="payee\\.accountNumber"]').fill('31104');
  await page.locator('input[name="verifyAccount"]').click();
  await page.locator('input[name="verifyAccount"]').fill('31104');
  await page.locator('input[name="amount"]').click();
  await page.locator('input[name="amount"]').fill('4000000');
  await page.getByRole('combobox').selectOption('30660');
  await page.getByRole('button', { name: 'Send Payment' }).click();
  await expect(page.getByRole('heading', { name: 'Bill Payment Complete' })).toHaveText('Bill Payment Complete', { timeout:60000 });
});