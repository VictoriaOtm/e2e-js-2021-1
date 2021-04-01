import settings from '../steps/settings';
import account from '../steps/account';
import { strict as assert } from "assert";

describe('Settings', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Password length less than 6', () => {
		const new_pass = 'artem';
		assert.strictEqual(
			settings.setPassword(
				process.env.PASSWORD,
				new_pass
			),
			true,
			`Пароль был изменен на невалидное значение ${new_pass}`,
		)
	});
});
