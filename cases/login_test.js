import account from '../steps/account';
import letters from '../steps/letters/index';

// пример теста
describe('Login test', () => {
	it('Авторизироваться и проверить пользователя', () => {
		account.open('https://musicexpress.sarafa2n.ru/login');
		account.login();
	});
});
