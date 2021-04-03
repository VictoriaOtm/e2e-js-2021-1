import main from '../../steps/main/main';


describe('test search', () => {
	
	it('Поиск по професии на главной странице', () => {	
		main.open('https://studhunt.ru')
        main.searchByProfession();
        main.checkVacTitles();
	});
});
