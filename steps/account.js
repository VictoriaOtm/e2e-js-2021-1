import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://account.mail.ru');
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginAndPasswordForm(process.env.LOGIN, process.env.PASSWORD);
		this.page.submit();
		this.page.checkAuthorizedProfile(process.env.LOGIN);
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
