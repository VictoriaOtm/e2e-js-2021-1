import DefaultPage from './default';

class BoardPage extends DefaultPage {
    constructor() {
        super('board', '[data-test-id=create]')
    }

    get locators() {
        return {
            login: 'input[id="inputLogin"]',
            addFolderButton: '[data-test-id="create"]',
            editFolderButton: '[data-test-id="folder-edit"]',
        }
    }

    openAddFolderPopup() {
        this.page.waitForVisible(this.locators.addFolderButton);
        this.page.click(this.locators.addFolderButton);
    }

    openEditFolderPopup() {
        this.page.waitForVisible(this.locators.editFolderButton);
        this.page.click(this.locators.editFolderButton);
    }
}

export default new BoardPage();
