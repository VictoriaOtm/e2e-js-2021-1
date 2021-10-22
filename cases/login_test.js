import { strict as assert } from 'assert';
import login from '../steps/login';

describe('login testing', () => {
	it('Авторизоваться', () => {
		login.open('https://pinterbest.ru/login');
		const actualUsername = login.login();
		assert.strictEqual(
			process.env.LOGIN,
			actualUsername,
			`Username авторизованного юзера ${actualUsername} не соответствует ожидаемому ${process.env.LOGIN}`,
		)
	});
});
