import profile from '../../steps/profile/profile';
import account from '../../steps/account';


describe('test login', () => {

	it('Авторизоваться и проверить email в профиле', () => {
		account.open('https://studhunt.ru/auth');
		account.login();
		
		profile.goToProfile();
		profile.checkEmail();
	});
});
