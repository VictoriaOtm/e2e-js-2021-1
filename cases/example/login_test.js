import account from '../../steps/account';


describe('test login', () => {

	it('Авторизоваться', () => {
		account.open('https://studhunt.ru/auth');
		account.login();
	});
});
