import DefaultPage from '../default';

class HomePage extends DefaultPage {
    constructor() {
        super('account', '[class=page-wrapper]')
    }

    get createFolderLocators() {
        return {
            create: 'div[data-name="create"]',
            createFolder: 'div[data-name="createFolder"]',
            modalInput: 'div[data-qa-modal] input',
            submitButton: 'div[data-qa-modal] button[class*=primary]',
            allFiles: `div[data-name="/"]`,
            createdFolder: `div[data-name="/${process.env.CREATE_FOLDER}"]`,
        }
    }

    get moveFileLocators() {
        return {
            file: `a[data-qa-name="${process.env.MOVE_FILE}"]`,
            dropdown: 'div[id="dropdownList"]',
            moveFileOption: 'div[data-name="move"]',
            modal: 'div[data-qa-modal]',
            folderInModal: `div[data-qa-modal] div[data-name="/${process.env.MOVE_FOLDER}"]`,
            submitButton: 'div[data-qa-modal] button[class*=primary]',
        }
    }

    clickOnCreateSomething () {
        this.page.click(this.createFolderLocators.create);
    }

    clickOnCreateFolder () {
        this.page.waitForVisible(this.createFolderLocators.createFolder);
        this.page.click(this.createFolderLocators.createFolder);
    }

    fillCreateNewFolderForm (folderName) {
        this.page.waitForVisible(this.createFolderLocators.modalInput);
        this.page.click(this.createFolderLocators.modalInput);
        this.page.setValue(this.createFolderLocators.modalInput, folderName);
    }

    createNewFolderSubmit () {
        this.page.waitForVisible(this.createFolderLocators.submitButton);
        this.page.click(this.createFolderLocators.submitButton);
    }

    checkCreatedFolderExists() {
        this.page.waitForVisible(this.createFolderLocators.allFiles);
        return this.page.isExisting(this.createFolderLocators.createdFolder);
    }

    rightClickOnFolder() {
        this.page.rightClick(this.moveFileLocators.file);
    }

    clickMoveToFolder() {
        this.page.waitForVisible(this.moveFileLocators.dropdown);
        this.page.click(this.moveFileLocators.moveFileOption);
    }


    selectFolder() {
        this.page.waitForVisible(this.moveFileLocators.modal);
        this.page.click(this.moveFileLocators.folderInModal);
    }

    moveFileSubmit() {
        this.page.click(this.moveFileLocators.submitButton);
    }

    checkFileMoved() {
        return this.page.isExisting(this.moveFileLocators.file);
    }

}

export default new HomePage();
