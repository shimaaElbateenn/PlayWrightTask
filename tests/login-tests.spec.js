import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'

test('valid login test', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('shimaaelbateen10', 'password')
  await expect (Login.account_overview_link).toContainText('Accounts Overview', { timeout: 60000 })
});

test('invalid login test', async ({ page }) => {
  const Login = new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('shimaaismail', 'password')
  await expect(Login.error).toBeVisible({ timeout: 60000 });
  await expect(Login.error_message).toContainText("The username and password could not be verified.", { timeout: 60000 });
});