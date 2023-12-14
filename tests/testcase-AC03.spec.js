import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { PayBill } from '../pages/pay-bill'

test('test case AC-03 Pay Bill', async ({ page }) => {

  const Login = new LoginPage(page)
  const PayBillObj = new PayBill(page)

  await Login.gotoLoginPage()
  await Login.login('shimaaelbateen11', 'password')

  //Pay the bill less than 3,500,000
  await PayBillObj.payBill('39318', '1000', '39207')
  await expect(PayBillObj.payment_status).toHaveText('Bill Payment Complete', { timeout: 30000 });

  //Pay the bill more than 3,500,000
  await PayBillObj.payBill('39318', '4000000', '39207')
  await expect(PayBillObj.payment_status).toHaveText('Bill Payment Complete', { timeout: 30000 });

  await page.close()
});