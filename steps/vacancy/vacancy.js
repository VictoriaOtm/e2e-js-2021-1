import DefaultSteps from '../default';
import page from '../../pages/vacancy/vacancy';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openVacancyCreation() {
        this.page.clickVacancyCreation();
    }

    createEmptyErrors() {
        this.page.fillFormTitle();
        return this.page.getErrorsAfterEmptyVacancyCreation()
    }

    createWithInvalidSalaryErrors() {
        return this.page.getVacancyErrorsWithInvalidSalary();
    }
}

export default new ProfileSteps();
