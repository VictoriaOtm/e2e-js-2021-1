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
		}
	}

	fillProfessionForm (prof) {
        this.page.waitForVisible(this.locators.profession);
        this.page.click(this.locators.profession);
        this.page.setValue(this.locators.profession,prof);
	}

    find(){
        this.page.waitForVisible(this.locators.find);
        this.page.click(this.locators.find);   
    }

    checkVacancyOpen(){
        this.page.waitForVisible(this.locators.vacBody)
    }

}

export default new MainPage();
