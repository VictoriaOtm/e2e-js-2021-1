import account from '../../steps/account';
import people from '../../steps/people';

// пример теста
describe('test id', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Авторизоваться', () => {
		account.open('https://onmeet.ru');
		account.login();
	});

	it('Избранные люди', () => {
		account.open('https://onmeet.ru/people');
		people.openFavorites();
	});

	it('Переход на юзера', () => {
		account.open('https://onmeet.ru/people');
		people.clickToUser();
	});

});
