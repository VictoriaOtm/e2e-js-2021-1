import login from '../steps/login';

describe('login testing', () => {
	// используйте beforeEach хук для вызова login.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		login.open('https://pinterbest.ru/login');
		login.login();
	});
});
