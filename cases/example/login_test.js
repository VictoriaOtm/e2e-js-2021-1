import account from '../../steps/account';
import profile from "../../pages/profile";

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться и открыть первое письмо на странице', () => {
		account.open('https://kino-park.online/login');
		account.login();
		account.logout();
	});
});

