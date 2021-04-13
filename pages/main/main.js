import DefaultPage from '../default';

class MainPage extends DefaultPage {
	constructor() {
		super('main', '#app')
	}

	get locators() {
		return {
            profession: 'input[id="searchJob"]',
            find: 'div[id="searchBtn"]',
            vacBody: '.main',
            vacTitle: '.list-row'
		}
	}

    get searchData () {
        return {
            profession: 'воспитатель',
        }
    }

	fillProfessionForm () {
        this.page.waitForVisible(this.locators.profession);
        this.page.click(this.locators.profession);
        this.page.setValue(this.locators.profession,this.searchData.profession);
	}

    find(){
        this.page.waitForVisible(this.locators.find);
        this.page.click(this.locators.find);   
    }

    getSearchData(){
        return this.searchData
    }

    getVacancyTitles(){
        this.page.waitForVisible(this.locators.vacBody)
        return this.page.getText(this.locators.vacTitle).map(function(str) {
			return str.toLowerCase();
		  });
    }

}

export default new MainPage();
