import account from '../../steps/account';
import { strict as assert } from 'assert';

describe('test id', () => {

	it('Авторизоваться', () => {
		account.open('https://findfreelancer.ru/login');
		const {headerNickName, nickName} = account.login();
		assert.strictEqual(
			headerNickName,
			nickName,
			`Email авторизованного юзера ${headerNickName} не соответствует ожидаемому ${nickName}`,
		)
	});
});
