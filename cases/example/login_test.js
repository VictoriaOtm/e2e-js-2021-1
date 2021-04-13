import account from '../../steps/account';
import profile from '../../steps/profile/index';

describe('test profile', () => {

	it('Авторизоваться и открыть страницу с профилем', () => {
		account.auth();
		profile.openProfilePage();
		profile.checkProfileEmailField();
	});

});
