exports.RequestLoan = class RequestLoan {
    constructor (page) {
        this.page = page
        this.request_loan_link = page.getByRole('link', { name: 'Request Loan' })
        this.amount_textbox = page.locator('#amount')
        this.downPayment_textbox = page.locator('#downPayment')
        this.apply_btn = page.getByRole('button', { name: 'Apply Now' })
        this.loan_status = page.locator('xpath=//*[@id="loanStatus"]')
    }

    async requestLoan(amount, downpayment) {
        await this.request_loan_link.click()
        await this.amount_textbox.fill(amount)
        await this.downPayment_textbox.fill(downpayment)
        await this.apply_btn.click()
    }
}