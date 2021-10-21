import account from '../steps/account';
import navBar from '../steps/navBar';

// пример теста
describe('login', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		account.open('https://ykoya.ru');
		navBar.openLogin();
		account.login();
		navBar.checkAuthorized();
	});
});
