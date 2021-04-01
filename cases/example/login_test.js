import account from '../../steps/account';

describe('Login test', () => {
	it('Авторизоваться и проверить пользователя', () => {
		account.open('https://musicexpress.sarafa2n.ru/login/');
		account.login();
	});
});
