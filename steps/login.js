import DefaultSteps from './default';
import loginPage from '../pages/login';
import profilePage from '../pages/profile';

class LoginSteps extends DefaultSteps {
	constructor() {
		super(loginPage);
	}

	auth() {
		this.open('https://pinterbest.ru/login');
		this.waitForLoginPage();
		this.login();
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		profilePage.waitForContainer();
		return profilePage.getUsername();
	}

	waitForLoginPage() {
		this.page.waitForContainer();
	}
}

export default new LoginSteps();
