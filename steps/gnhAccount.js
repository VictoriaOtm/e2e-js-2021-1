import DefaultSteps from './default';
import page from '../pages/gnhAccount';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		return this.login();
	}

    openAuthPage() {
        this.page.openAuthPage();
    }

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		return this.page.checkProfilePageOpened();
	}
}

export default new AccountSteps();