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

    renameFolder(folderName) {
        this.page.openAllFiles();
        this.page.clickOnFolder(folderName);
        this.page.clickOnMore();
        this.page.clickOnRename();
        this.page.fillFolderInput(folderName+folderName);
        this.page.clickConfirmButton()
        this.page.checkNewFolder(folderName+folderName);
    }

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new FolderSteps();
