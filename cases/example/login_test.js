import account from '../../steps/account';
import profile from '../../steps/profile/index';
import {strict as assert} from "assert";

describe('login test', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться и открыть страницу профиля', () => {
		account.open('https://onmeet.ru');
		account.login();
		profile.openProfile();
		const username = process.env.LOGIN
		const actual = profile.getUsername();
		assert.strictEqual(
			actual,
			username,
			`Имя авторизованного юзера ${actual} не соответствует ожидаемому ${username}`,
		)
	});
});
