exports.LoginPage = class LoginPage {
    constructor (page) {
        this.page = page
        this.username_textbox = page.locator('input[name="username"]')
        this.password_textbox = page.locator('input[name="password"]')
        this.login_btn = page.getByRole('button', { name: 'Log In' })
        this.account_overview_link = page.getByRole('heading', { name: 'Accounts Overview' })
        this.error = page.getByRole('heading', { name: 'Error!' })
        this.error_message = page.getByText('The username and password')
    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_btn.click()
    }

    async gotoLoginPage() {
        await this.page.goto('http://localhost:8080/parabank');
    }
}