import DefaultSteps from './default';
import page from '../pages/account';

class AccountSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.waitForAccount();
		this.open('https://kino-park.online/login');
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		//this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.goToProfile();
		this.page.checkAuthorized(process.env.LOGIN);
	}

	waitForAccount() {
		this.page.waitForContainer();
	}

	changePassword() {
		const newPass = "qwerqwer";
		this.open('https://kino-park.online/profileChange');
		this.page.fillPasswordForm(newPass);
		this.page.fillOldPasswordForm(process.env.PASSWORD);
		this.page.submit();
		const oldPass = process.env.PASSWORD;
		process.env.PASSWORD = newPass;
		this.page.logout();
		this.auth();
		//this.page.next();
		this.open('https://kino-park.online/profileChange');
		this.page.fillPasswordForm(oldPass);
		this.page.fillOldPasswordForm(process.env.PASSWORD);
		this.page.submit();
		process.env.PASSWORD=oldPass;
	}

}

export default new AccountSteps();
