import DefaultPage from './default';

class BoardPage extends DefaultPage {
    constructor() {
        super('board', '[data-test-id=create]')
    }

    get locators() {
        return {
            login: 'input[id="inputLogin"]',
            addFolderButton: '[data-test-id="create"]',
            addFolderCancelButton: '[data-test-id="cancel"]',
            editFolderButton: '[data-test-id="folder-edit"]',
            editFolderCancelButton: '[data-test-id="cancel"]',
        }
    }

    openAddFolderPopup() {
        this.page.waitForVisible(this.locators.addFolderButton);
        this.page.click(this.locators.addFolderButton);
        this.page.click(this.locators.addFolderCancelButton);
    }
    

    openEditFolderPopup() {
        this.page.waitForVisible(this.locators.editFolderButton);
        this.page.click(this.locators.editFolderButton);
        this.page.click(this.locators.editFolderCancelButton);
    }
}

export default new BoardPage();
