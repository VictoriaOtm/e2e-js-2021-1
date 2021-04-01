import account from '../../steps/account';
import profile from '../../steps/profile/index';

describe('test profile', () => {

	beforeEach(() => {
		account.auth();
	})

	it('Авторизоваться и открыть страницу с профилем', () => {
		profile.openProfilePage();
	});

});
