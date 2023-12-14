exports.PayBill = class PayBill {
    constructor (page) {
        this.page = page
        this.pay_bill_link = page.getByRole('link', { name: 'Bill Pay' })
        this.name_textbox = page.locator('input[name="payee\\.name"]')
        this.address = page.locator('input[name="payee\\.address\\.street"]')
        this.city = page.locator('input[name="payee\\.address\\.city"]')
        this.state = page.locator('input[name="payee\\.address\\.state"]')
        this.zib_code = page.locator('input[name="payee\\.address\\.zipCode"]')
        this.phone_number = page.locator('input[name="payee\\.phoneNumber"]')
        this.account_number = page.locator('input[name="payee\\.accountNumber"]')
        this.verify_account_number = page.locator('input[name="verifyAccount"]')
        this.amount_textbox = page.locator('input[name="amount"]')
        this.from_account = page.getByRole('combobox')
        this.send_payment_btn = page.getByRole('button', { name: 'Send Payment' })
        this.payment_status = page.getByRole('heading', { name: 'Bill Payment Complete' })
    }

    async payBill(toAccountNum, amount, fromAccount) {
        await this.pay_bill_link.click()
        await this.name_textbox.fill('Shimaa')
        await this.address.fill('21 El-Syouf')
        await this.city.fill('Alexandria')
        await this.state.fill('Alexandria')
        await this.zib_code.fill('98625')
        await this.phone_number.fill('01025654332')
        await this.account_number.fill(toAccountNum)
        await this.verify_account_number.fill(toAccountNum)
        await this.amount_textbox.fill(amount)
        await this.from_account.selectOption(fromAccount)
        await this.send_payment_btn.click()
    }

}