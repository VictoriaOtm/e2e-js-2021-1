import login from '../steps/login';

describe('login testing', () => {
	it('Авторизоваться', () => {
		login.open('https://pinterbest.ru/login');
		login.login();
	});
});
