import DefaultPage from '../default';
import { strict as assert } from 'assert';

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

    checkVacancyTitles(){
        this.page.waitForVisible(this.locators.vacBody)
        const titles = this.page.getText(this.locators.vacTitle) 
        titles.forEach(element => (
            assert.strictEqual(element.toLowerCase().includes(this.searchData.profession),
            true,
            `Профессия в  вакансии ${element} должна включать поисковую строку ${this.searchData.profession}`,
            )
        ))
    }

}

export default new MainPage();
