import DefaultSteps from './default';
// import page from '../pages/account';
import page from '../pages/gnhAccount';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.login();
	}

    openAuthPage() {
        this.page.openAuthPage();
    }

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.checkProfilePageOpened();
	}
}

export default new AccountSteps();