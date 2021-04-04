import account from '../../steps/account';
import meetChat from  '../../steps/chat_meet_id_1'

// пример теста
describe('login test', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		account.open('https://onmeet.ru');
		account.login();
	});
});
