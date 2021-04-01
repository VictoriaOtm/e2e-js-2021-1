import account from '../../steps/account';
import profile from '../../steps/profile/index';

describe('login test', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться и открыть страницу профиля', () => {
		account.open('https://onmeet.ru');
		account.login();

		profile.openProfile();
		profile.checkLogin();
	});
});
