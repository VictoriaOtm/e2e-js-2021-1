import account from '../../steps/account';
import letters from '../../steps/letters/index';

// пример теста
describe('test login', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		account.open('https://kino-park.online/login');
		account.login();
	});
});

describe('test change passwor', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('поменть пароль', () => {
		account.changePassword();
	});
});
