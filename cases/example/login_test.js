import profile from '../../steps/profile/profile';
import account from '../../steps/account';
import {strict as assert} from "assert";

describe('test login', () => {

	it('Авторизоваться и проверить email в профиле', () => {
		account.open('https://studhunt.ru/auth');
		account.login();
		
		profile.goToProfile();
		const profileEmail = profile.getProfileEmail();
		assert.strictEqual(
			profileEmail,
			account.email,
            `Email авторизованного юзера ${profileEmail} не соответствует ожидаемому ${account.email}`,
        )
	});
});
