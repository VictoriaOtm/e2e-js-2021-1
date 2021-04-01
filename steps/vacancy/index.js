import DefaultSteps from '../default';
import page from '../../pages/vacancy';

class VacancySteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openVacancyPage() {
        this.page.waitForContainer();
        this.page.clickVacancy();
        this.page.openFirst();
        this.page.checkVacancyOpened();
    }
}

export default new VacancySteps();
