import DefaultSteps from '../default';
import page from '../../pages/home';

class CloudSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForPage() {
        this.page.waitForContainer();
    }

    moveFile() {
        this.page.rightClickOnFolder();
        this.page.clickMoveToFolder();
        this.page.selectFolder();
        this.page.moveFileSubmit();
    }

    checkFileMoved() {
        return this.page.checkFileMoved();
    }

}

export default new CloudSteps();
