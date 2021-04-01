import DefaultSteps from '../default';
import page from '../../pages/vacancy/vacancy';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openVacancyCreation() {
        this.page.clickVacancyCreation();
    }

    createEmpty () {
        this.page.checkEmptyVacancyError();
    }
}

export default new ProfileSteps();
