import account from '../../steps/account';
import meetChat from  '../../steps/chat_meet_id_1'

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		account.open('https://onmeet.ru');
		account.login();

	});

	it('Отправить сообщение в чат', () => {
		// account.auth();
		meetChat.openChat('webdriverio test');
	});
});
