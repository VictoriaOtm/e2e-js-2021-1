import DefaultPage from './default';
import { strict as assert } from 'assert';
import folder from '../steps/folder';

class FolderPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-ready]')
	}

	get locators() {
		return {
            createButton: 'div[data-name="create"]',
            folderButton: 'div[data-name="createFolder"]',
            folderInput: 'input[type="text"]',
            createFolderButton: 'button[class="ui fluid primary button"]',
            allFilesButton: 'div[data-name="/"]',
            removeButton: 'div[data-name="remove"]',
            confirmRemoveButton: 'button[data-name="remove"]',
            promoCloseButton: 'div[class="b-panel__close"]',
            closeOkWindow: 'button[title="Закрыть"]',
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

    checkNewFolder(folderName) {
        const selector = 'div[data-name="/' + folderName + '"]';
        this.page.waitForVisible(selector);
        const currentFolderName = this.page.getText(selector);
        assert.strictEqual(
			folderName,
			currentFolderName,
			`Ожидаем ${folderName}\nПолучаем ${currentFolderName}`,
		)
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

    closePromo() {
        this.page.waitForVisible(this.locators.promoCloseButton);
        this.page.click(this.locators.promoCloseButton);
    }

    clickOnRemoveButton() {
        this.page.waitForVisible(this.locators.removeButton);
        this.page.click(this.locators.removeButton);
    }

    clickOnConfirmRemoveButton() {
        this.page.waitForVisible(this.locators.confirmRemoveButton);
        this.page.click(this.locators.confirmRemoveButton);
    }

    closeOkWindow() {
        this.page.waitForVisible(this.locators.closeOkWindow);
        this.page.click(this.locators.closeOkWindow);
    }

    checkFolder(folderName) {
        const selector = 'div[data-name="/' + folderName + '"]';
        const currentFolderName = this.page.getText(selector);
        assert.strictEqual(
			"aa",
			currentFolderName,
			`Ожидаем ${folderName}\nПолучаем ${currentFolderName}`,
		)
    }
}

export default new FolderPage();
