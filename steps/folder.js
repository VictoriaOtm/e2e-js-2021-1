import DefaultSteps from './default';
import page from '../pages/folder';

class FolderSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

    addFolder(folderName) {
        this.page.clickOnCreateButton();
        this.page.clickOnFolderButton();
        this.page.fillFolderInput(folderName);
        this.page.clickCreateFolder();
    }

	createFolder(folderName) {
        this.page.clickOnCreateButton();
        this.page.clickOnFolderButton();
        this.page.fillFolderInput(folderName);
        this.page.clickCreateFolder();
        return this.page.getNewFolder(folderName);
	}

    renameFolder(folderName, newFolderName) {
        this.page.openAllFiles();
        this.page.clickOnFolder(folderName);
        this.page.clickOnMore();
        this.page.clickOnRename();
        this.page.fillFolderInput(newFolderName);
        this.page.clickConfirmButton()
        return this.page.getNewFolder(newFolderName);
    }

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new FolderSteps();
