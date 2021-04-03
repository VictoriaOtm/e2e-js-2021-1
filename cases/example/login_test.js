import account from '../../steps/account';
import {strict as assert} from "assert";

// пример теста
describe('test pinteo - auth', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Проверка авторизации на Pinteo', () => {
		account.open('https://pinteo.ru/login');
		account.login();

		const profileUsername = account.getAuthorized();
		assert.strictEqual(
			profileUsername,
			process.env.LOGIN,
			`Авторизованный юзер ${profileUsername} не соответствует ожидаемому ${process.env.LOGIN}`,
		)
	});
});
