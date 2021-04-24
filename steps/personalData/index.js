import DefaultSteps from '../default';
import page from '../../pages/personalData';

class PersonalDataSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForPersonalDataLink() {
        this.page.waitForContainer();
    }

    openPersonalData() {
        this.page.clickPersonalData();
        this.page.checkPersonalDataOpened();
    }

    editFirstName(invalidFirstName) {
        this.page.fillFirstNameForm(invalidFirstName);
        this.page.submit();
        this.page.checkErrorMessage();
    }
}

export default new PersonalDataSteps();
