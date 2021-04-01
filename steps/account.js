import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login() {
		this.page.openLoginForm();
		this.page.fillLoginForm(process.env.LOGIN, process.env.PASSWORD);
		this.page.submit();
	}

}

export default new AccountSteps();
