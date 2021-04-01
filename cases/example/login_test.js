import account from '../../steps/account';
import profile from '../../steps/profile/index';

describe('test login', () => {
	it('Авторизоваться и открыть профиль', () => {
		account.open('https://studhunt.ru/auth');
		account.login();

		profile.goToProfile();
		profile.checkAuthorizedEmail();
	});
});
