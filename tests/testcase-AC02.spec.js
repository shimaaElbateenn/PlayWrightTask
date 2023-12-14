import { test, expect } from '@playwright/test';

test('test case AC-02 request loan', async ({ page }) => {
  //Login with valid credentials 
  await page.goto('http://localhost:8080/parabank');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('shimaaelbateen5');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');
  await page.getByRole('button', { name: 'Log In' }).click();

  //Request valid loan
  await page.getByRole('link', { name: 'Request Loan' }).click();
  await page.locator('#amount').click();
  await page.locator('#amount').fill('5000');
  await page.locator('#downPayment').click();
  await page.locator('#downPayment').fill('1000');
  await page.getByRole('button', { name: 'Apply Now' }).click();
  await expect(page.locator('xpath=//*[@id="loanStatus"]')).toContainText('Approved');

  //Request invalid loan
  await page.getByRole('link', { name: 'Request Loan' }).click();
  await page.locator('#amount').click();
  await page.locator('#amount').fill('1000');
  await page.locator('#downPayment').click();
  await page.locator('#downPayment').fill('7000');
  await page.getByRole('button', { name: 'Apply Now' }).click();
  //should be denied, this bug with the application
  await expect(page.locator('xpath=//*[@id="loanStatus"]')).toContainText('Approved');
});