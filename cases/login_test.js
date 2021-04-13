import account from '../steps/authorization/authorization';
import profile from '../steps/profile/profile'
import {strict as assert} from "assert";

describe('test login', () => {
	it('Авторизоваться и перейти в профиль', () => {
		account.login();
		profile.openProfile();
		const data = profile.getUserEmails()

		assert.strictEqual(
			data.expectedEmail,
			data.actualEmail,
			`Email авторизованного пользователя ${data.actualEmail} не соответствует ожидаемому ${data.expectedEmail}`,
		)
	});
});
