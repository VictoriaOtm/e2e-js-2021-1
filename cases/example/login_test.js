import account from '../../steps/account';

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	// it('Авторизоваться и открыть первое письмо на странице', () => {
	// 	account.open('https://account.mail.ru');
	// 	account.login();
	//
	// 	letters.waitForList();
	// 	letters.openLetter();
	// });

	it('Авторизоваться и перейти в профиль', () => {
		account.open('https://www.studhunt.ru/auth');
		account.login();

		//profile.openProfile();
		//
		// letters.waitForList();
		// letters.openLetter();
	});
});
