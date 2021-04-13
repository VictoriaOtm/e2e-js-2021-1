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

    getVacancyTitles(){
        return this.page.getVacancyTitles();
    }

    getSearchData(){
        return this.page.getSearchData()
    }
    
}

export default new MainSteps();
