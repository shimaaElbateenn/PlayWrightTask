import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'
import { TransferMoneyPage } from '../pages/transfer-money'

test('test case AC-01 Transfer money', async ({ page }) => {
  const Login = new LoginPage(page)
  const Transfer = new TransferMoneyPage(page)

  await Login.gotoLoginPage()
  await Login.login('shimaaelbateen10', 'password')

  await Transfer.setInitialBalance('3500000')

  //Create 3 accounts
  await Transfer.openNewAccount()
  await Transfer.openNewAccount()
  await Transfer.openNewAccount()

  //Check the total balance
  await Transfer.account_overview_link.click()
  await expect(Transfer.total_balance_txt).toHaveText('$3500,000.00', { timeout: 60000 });

  //transfer from - to same account
  await Transfer.transferMoney('100', '38430', '38430')
  await expect(Transfer.transfer_complete_message).toHaveText('Transfer Complete!', { timeout: 60000 });

  //transfer amount more than the balance in account
  await Transfer.transferMoney('400', '38541', '38430')
  await expect(Transfer.transfer_complete_message).toHaveText('Transfer Complete!', { timeout: 60000 });

  await page.close()

});