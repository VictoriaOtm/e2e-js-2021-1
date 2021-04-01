import account from '../../steps/account';

// пример теста
describe('test pinteo - auth', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Проверка авторизации на Pinteo', () => {
		account.open('https://pinteo.ru/login');
		account.login();
	});
});
