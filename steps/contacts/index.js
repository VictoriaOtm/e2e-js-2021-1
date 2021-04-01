import DefaultSteps from '../default';
import page from '../../pages/contacts';

class ContactsSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForContactsLink() {
        this.page.waitForContainer();
    }

    openContacts() {
        this.page.clickContacts();
        this.page.checkContactsOpened();
    }
}

export default new ContactsSteps();
