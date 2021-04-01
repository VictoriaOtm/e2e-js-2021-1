import DefaultSteps from './default';
import page from '../pages/folder';

class FolderSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	createFolder(folderName) {
        this.page.clickOnCreateButton();
        this.page.clickOnFolderButton();
        this.page.fillFolderInput(folderName);
        this.page.clickCreateFolder();
        this.page.checkNewFolder(folderName);
	}

    deleteFolder(folderName) {
        this.page.openAllFiles();
        this.page.clickOnFolder(folderName);
        this.page.closePromo();
        this.page.clickOnRemoveButton();
        this.page.clickOnConfirmRemoveButton();
        this.page.closeOkWindow();
        this.page.checkFolder(folderName);
    }

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new FolderSteps();
