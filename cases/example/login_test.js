import account from '../../steps/account';
import {strict as assert} from "assert";

describe('Login test', () => {
	it('Авторизоваться и проверить пользователя', () => {
		account.open('https://musicexpress.sarafa2n.ru/login/');
		let settingsEmail = account.login();
		assert.strictEqual(
			settingsEmail,
			process.env.LOGIN_LOGIN,
			`Email авторизованного юзера ${settingsEmail} не соответствует ожидаемому ${process.env.LOGIN_LOGIN}`,
		)
	});
});
