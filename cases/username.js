import settings from '../steps/settings';
import account from '../steps/account';
import { strict as assert } from "assert";

describe('User', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Check user username', () => {
		const email = process.env.LOGIN;

		assert.strictEqual(
			settings.getEmail(),
			email,
			`Email in settings not compare ${email}`,
		)
	});
});
