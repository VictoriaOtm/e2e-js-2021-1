import account from '../steps/account';
import navBar from '../steps/nav_bar';

describe('login', () => {

	it('Авторизоваться', () => {
		account.open('https://ykoya.ru');
		navBar.openLogin();
		account.login();
		navBar.checkAuthorized();
	});
});
