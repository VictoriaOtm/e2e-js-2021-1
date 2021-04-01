import DefaultSteps from '../default';
import page from '../../pages/resume';

class ResumeCreateSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openCreatePage() {
        this.page.openCreatePage();
    }

    create() {
        this.page.fillTitleForm();
        this.page.fillDescriptionForm();
        this.page.fillPlaceForm();
        this.page.fillSkillsForm();
        this.page.submit();
    }

    checkCreated () {
        this.page.checkCreatedPlace();
        this.page.checkCreatedDescription();
    }
}

export default new ResumeCreateSteps();