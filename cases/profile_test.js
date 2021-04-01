import account from '../steps/account';
import profile from '../steps/profile/index';


describe('profile test', () => {
	beforeEach(() => {
		account.open('https://onmeet.ru');
		account.login();
	});
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Изменение инфромации в поле "Навыки"', () => {
		profile.openProfile();
		profile.editSkills();
		profile.wipeSkills();
	});
});
