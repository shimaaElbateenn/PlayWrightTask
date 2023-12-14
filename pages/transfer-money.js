exports.TransferMoneyPage = class TransferMoneyPage {
    constructor (page) {
        this.page = page

        this.admin_page_link = page.getByRole('link', { name: 'Admin Page' })
        this.init_palance_textbox = page.locator('#initialBalance')
        this.submit_btn = page.getByRole('button', { name: 'Submit' })

        this.open_new_account_link = page.getByRole('link', { name: 'Open New Account' })
        this.open_new_account_btn = page.getByRole('button', { name: 'Open New Account' })
        this.account_overview_link = page.getByRole('link', { name: 'Accounts Overview' })

        this.total_balance_txt = page.getByText('$3500,000.00')

        this.transfer_funds_link = page.getByRole('link', { name: 'Transfer Funds' })
        this.amount_textbox = page.locator('xpath=//*[@id="amount"]')
        this.from_account_option = page.locator('#fromAccountId')
        this.to_account_option = page.locator('#toAccountId')
        this.transfer_btn = page.getByRole('button', { name: 'Transfer' })
        this.transfer_complete_message = page.getByRole('heading', { name: 'Transfer Complete!' })
    }

    async setInitialBalance(balance) {
        await this.admin_page_link.click()
        await this.init_palance_textbox.fill(balance)
        await this.submit_btn.click()
    }

    async openNewAccount() {
        await this.open_new_account_link.click()
        await this.open_new_account_btn.click()
    }

    async transferMoney(amount, fromAccount, toAccount) {
        await this.transfer_funds_link.click()
        await this.amount_textbox.fill(amount)
        await this.from_account_option.selectOption(fromAccount)
        await this.to_account_option.selectOption(toAccount)
        await this.transfer_btn.click()
    }

}