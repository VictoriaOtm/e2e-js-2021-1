import DefaultPage from './default';

class AccountPage extends DefaultPage {
	constructor() {
		super('account', '#login__window')
	}

	get locators() {
		return {
			email: 'input[name="email"]',
			password: 'input[name="password"]',
			submitButton: 'button[class="custom-form__submit"]',
			userNickname: 'div[class="nickname__text"]',
		}
	}

	fillLoginForm (username) {
		this.page.waitForVisible(this.locators.email);
		this.page.click(this.locators.email);
		this.page.setValue(this.locators.email, username);
	}

	fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	checkAuthorizedEmail(nickName) {
		this.page.waitForVisible(this.locators.userNickname);
		const headerNickName = this.page.getText(this.locators.userNickname);
	
		return {headerNickName, nickName}
	}
}

export default new AccountPage();
