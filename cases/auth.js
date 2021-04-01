
import account from '../steps/account';
import header from '../steps/header';
import {strict as assert} from "assert";

describe('Страница входа', () => {
	it('Авторизоваться', () => {
		account.auth();

		const headerEmail = header.getEmail();
		const email = process.env.LOGIN;
		assert.strictEqual(
			headerEmail,
			email,
			`Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${email}`,
		)
	});
});
