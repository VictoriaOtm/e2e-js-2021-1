import account from '../steps/authorization/authorization';
import profile from '../steps/profile/profile'

describe('test login', () => {
	it('Авторизоваться и перейти в профиль', () => {
		account.open('https://www.studhunt.ru/auth');
		account.login();

		profile.openProfile();
		profile.checkUserEmail();
	});
});
