import main from '../../steps/main/main';


describe('test search', () => {
	
	it('Проверить переход на страницу с вакансиями по полю “профессии” при клике на поиск', () => {	
		main.open('https://studhunt.ru')
        main.searchByProfession();
        main.checkVacTitles();
	});
});
