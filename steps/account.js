import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submitForm();
		//костыль известен (из-за бага при логине), обсуждено с преподавателем
		browser.pause(5000);
		this.open("https://musicexpress.sarafa2n.ru/settings/");
		browser.pause(5000);
		this.page.checkAuthorizedEmail(process.env.LOGIN);
	}
}

export default new AccountSteps();
