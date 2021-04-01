import main from '../../steps/main/main';
import account from '../../steps/account';

// пример теста
describe('test id', () => {

	it('Авторизоваться', () => {
		account.open('https://studhunt.ru/auth');
		account.login();
	});
});

describe('test id', () => {
	
	beforeEach(() =>{
		account.auth()
	})

	it('Проверить переход на страницу с вакансиями по полю “профессии” при клике на поиск', () => {	
		main.waitForPage();
		main.searchByProfession();
	});
});
