import DefaultSteps from './default';
import page from '../pages/auth';
import MainPage from '../pages/main';
import SignupPage from '../pages/signup';

import user from '../credentials';

class AuthSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	auth() {
		this.open('https://mail.liokor.ru/auth');
		this.login();
	}

	login() {
		this.page.fillLoginForm(user.username);
		this.page.fillPasswordForm(user.password);
		this.page.submit();

		MainPage.waitForContainer();

		return user.username;
	}

	getLoginError() {
		return this.page.getLoginError();
	}

	getPasswordError() {
		return this.page.getPasswordError();
	}

	emptyLogin() {
		this.page.fillLoginForm('');
		this.page.fillPasswordForm(user.password);
		this.page.submit();

		this.page.waitForContainer();
	}

	emptyPassword() {
		this.page.fillLoginForm(user.username);
		this.page.fillPasswordForm('');
		this.page.submit();

		this.page.waitForContainer();
	}

	navigateToSignUp() {
		this.page.clickSignUp();
		SignupPage.waitForContainer();
	}
}

export default new AuthSteps();
