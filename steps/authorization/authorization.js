import DefaultSteps from '../default';
import page from '../../pages/authorization/authorization';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.userEmail = process.env.EMAIL;
		this.userPassword = process.env.PASSWORD;
	}

	login() {
		this.open('https://www.studhunt.ru/auth')
		this.page.fillEmailForm(this.userEmail);
		this.page.fillPasswdForm(this.userPassword);
		this.page.submit();
	}
}

export default new AccountSteps();
