import DefaultSteps from '../default';
import page from '../../pages/home';

class CloudSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForPage() {
        this.page.waitForContainer();
    }

    createDirectory() {
        this.page.clickOnCreateSomething();
        this.page.clickOnCreateFolder();
        this.page.fillCreateNewFolderForm(process.env.CREATE_FOLDER);
        this.page.createNewFolderSubmit();
    }

    checkCreatedFolderExists() {
        return this.page.checkCreatedFolderExists();
    }
}

export default new CloudSteps();
