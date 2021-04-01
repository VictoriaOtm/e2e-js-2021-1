import account from '../steps/account';

describe('Login test', () => {
	it('Авторизироваться и проверить пользователя', () => {
		account.open('https://musicexpress.sarafa2n.ru/login');
		account.login();
	});
});
