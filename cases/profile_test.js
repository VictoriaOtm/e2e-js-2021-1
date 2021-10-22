import login from '../steps/login';
import profile from '../steps/profile'

describe('profile testing', () => {
	beforeEach(() => {
		login.auth();
	})

	afterEach(() => {
		profile.logout();
	})

	it('check if login shows in profile', () => {
		profile.open('https://pinterbest.ru/profile');
		profile.checkUsername();
	});
	it('check if settings button is working', () => {
		profile.open('https://pinterbest.ru/profile');
		profile.checkSettingsButton();
	});
});
