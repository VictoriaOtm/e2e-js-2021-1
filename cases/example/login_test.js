import account from '../../steps/account';

describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		account.open('https://www.flicksbox.ru');
		account.login();
	});
});
