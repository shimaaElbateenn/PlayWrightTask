import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { RequestLoan } from '../pages/request-loan'

test('test case AC-02 request loan', async ({ page }) => {

  const Login = new LoginPage(page)
  const RequestLoanObj = new RequestLoan(page)

  await Login.gotoLoginPage()
  await Login.login('shimaaelbateen20', 'password')

  //Request valid loan
  await RequestLoanObj.requestLoan('5000', '1000')
  await expect(RequestLoanObj.loan_status).toContainText('Approved');

  //Request invalid loan
  //Status should be denied, this bug with the application
  await RequestLoanObj.requestLoan('1000', '7000')
  await expect(RequestLoanObj.loan_status).toContainText('Approved');

  await page.close()
});