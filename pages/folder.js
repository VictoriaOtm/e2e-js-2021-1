import DefaultPage from './default';

class FolderPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
            createButton: 'div[data-name="create"]',
            folderButton: 'div[data-name="createFolder"]',
            folderInput: 'input[type="text"]',
            createFolderButton: 'div[class^="CreateNewFolderDialog__button"]',
            allFilesButton: 'div[data-name="/"]',
            moreButton: 'div[data-name="more"]',
            renameButton: 'div[data-name="rename"]',
            confirmButton: 'button[data-name="confirm"]',
		}
	}

    clickOnCreateButton() {
        this.page.waitForVisible(this.locators.createButton);
        this.page.click(this.locators.createButton);
    }

    clickOnFolderButton() {
        this.page.waitForVisible(this.locators.folderButton);
        this.page.click(this.locators.folderButton);
    }

    fillFolderInput(folderName) {
        this.page.waitForVisible(this.locators.folderInput);
        this.page.setValue(this.locators.folderInput, folderName);
    }

    clickCreateFolder() {
        this.page.waitForVisible(this.locators.createFolderButton);
        this.page.click(this.locators.createFolderButton);
    }

    getNewFolder(folderName) {
        const selector = 'div[data-name="/' + folderName + '"]';
        this.page.waitForVisible(selector);
        return this.page.getText(selector);
    }

    openAllFiles() {
        this.page.waitForVisible(this.locators.allFilesButton);
        this.page.click(this.locators.allFilesButton);
    }

    clickOnFolder(folderName) {
        const selector = 'div[data-name="/' + folderName + '"]';
        this.page.waitForVisible(selector);
        this.page.click(selector);
    }

    clickOnMore() {
        this.page.waitForVisible(this.locators.moreButton);
        this.page.click(this.locators.moreButton);
    }

    clickOnRename() {
        this.page.waitForVisible(this.locators.renameButton);
        this.page.click(this.locators.renameButton);
    }

    clickConfirmButton() {
        this.page.waitForVisible(this.locators.confirmButton);
        this.page.click(this.locators.confirmButton);
    }
}

export default new FolderPage();
