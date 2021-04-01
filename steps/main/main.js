import DefaultSteps from '../default';
import page from '../../pages/main/main';

class MainSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

    searchByProfession(){
        this.page.fillProfessionForm('kek');
        this.page.find();
    }

    waitForPage(){
        this.page.waitForContainer();
    }
}

export default new MainSteps();
