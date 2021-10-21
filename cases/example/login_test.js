import account from '../../steps/account';

describe('Авторизация', () => {
	it('Вход', () => {
		account.open('/');
		account.login();
	});
});
