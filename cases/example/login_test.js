import account from '../../steps/account';
import letters from '../../steps/letters/index';


// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться и открыть первое письмо на странице', () => {
		account.open('https://account.mail.ru');
		account.login();

		letters.waitForList();
		letters.openLetter();
	});


});

