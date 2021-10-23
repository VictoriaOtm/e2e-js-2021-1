import DefaultSteps from './default';
import page from '../pages/account';
import dialoguesPage from '../pages/dialogues';

const AUTH_URL = 'https://mail.liokor.ru/auth';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open(AUTH_URL);
		this.waitForAccount();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();

		dialoguesPage.waitForContainer()
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new AccountSteps();
