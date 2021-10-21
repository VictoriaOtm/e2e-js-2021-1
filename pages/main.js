import DefaultPage from './default';

class MainPage extends DefaultPage {
    constructor() {
        super('main', 'div[id="messages-page"]');
    }

    get locators() {
        return {
            dialoguesContainer: 'ul[id="dialogues-listing"]',
            usernameBlock: 'span[id="profile-link-username"]'
        }
    }

    getUsername() {
        return this.page.getHTML(this.locators.usernameBlock, false);
    }
}

export default new MainPage();