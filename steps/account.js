import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.userEmail = process.env.EMAIL;
		this.userPassword = process.env.PASSWORD;
	}

	login() {
		this.page.fillEmailForm(this.userEmail);
		this.page.fillPasswdForm(this.userPassword);
		this.page.submit();
		this.page.checkAuthorizedUser(this.userEmail);
	}
}

export default new AccountSteps();
