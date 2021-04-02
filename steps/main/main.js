import DefaultSteps from '../default';
import page from '../../pages/main/main';

class MainSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

    searchByProfession(){
        this.page.fillProfessionForm();
        this.page.find();
    }

    checkVacTitles(){
        this.page.checkVacancyTitles();
    }
}

export default new MainSteps();
