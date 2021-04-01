import main from '../../steps/main/main';
import account from '../../steps/account';


describe('test search', () => {
	
	beforeEach(() =>{
		account.auth()
	})

	it('Проверить переход на страницу с вакансиями по полю “профессии” при клике на поиск', () => {	
		main.waitForPage();
        main.searchByProfession();
        main.checkVacOpen();
	});
});
