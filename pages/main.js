import DefaultPage from './default';

class MainPage extends DefaultPage {
    constructor() {
        super('main', 'div[id="messages-page"]');
    }

    get locators() {
        return {
            dialoguesContainer: 'ul[id="dialogues-listing"]',
            authUserEmail: 'span[id="profile-link-username"]'
        }
    }

    getAuthUserEmail() {
        return this.page.getHTML(this.locators.authUserEmail, false);
    }
}

export default new MainPage();