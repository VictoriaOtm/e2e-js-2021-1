import main from '../../steps/main/main';
import {strict as assert} from "assert";

describe('test search', () => {
	
	it('Поиск по професии на главной странице', () => {	
		main.open('https://studhunt.ru')
        main.searchByProfession();
		const titles = main.getVacancyTitles();
		const searchData = main.getSearchData();
		 assert.equal(titles.every(function(item){
			 return item.includes(searchData.profession);
			}),
		 	true,
			`Профессия в  вакансиях ${titles} должна включать поисковую строку ${searchData.profession}`)
	});
});
