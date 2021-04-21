import account from '../../steps/account';


describe('test id', () => {

	it('Авторизоваться', () => {
		account.open('https://onmeet.ru');
		account.login();
	});
});
