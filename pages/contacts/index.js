import DefaultPage from '../default';

class ContactsPage extends DefaultPage {
    constructor() {
        super('contacts', '[data-test-id="contacts-card"] [data-test-id="card-footer"]');
    }

    get locators() {
        return {
            container: this.container,
            contactsBody: '[data-test-id="mailId-contacts-wrapper"]',
        };
    }

    clickContacts() {
        this.page.click(this.locators.container);
    }

    checkContactsOpened() {
        this.page.waitForVisible(this.locators.contactsBody);
    }
}

export default new ContactsPage();
