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

    get data() {
        return {
            invalidFirstName: 'ХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХА',
            errorMessage: 'The field cannot contain special characters and must be between 1 and 40 characters in length',
        }
    }

    editFirstName() {
        this.page.fillFirstNameForm(this.data.invalidFirstName);
        this.page.submit();
        this.page.checkErrorMessage(this.data.errorMessage);
    }
}

export default new PersonalDataSteps();
