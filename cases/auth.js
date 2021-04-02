import account from '../steps/account';
import header from '../steps/header';
import {strict as assert} from "assert";

describe('Login', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Authorization', () => {
		const headerEmail = header.getEmail();
		const email = process.env.LOGIN;
		assert.strictEqual(
			headerEmail,
			email,
			`Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${email}`,
		)
	});
});
