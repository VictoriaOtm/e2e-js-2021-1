import DefaultSteps from '../default';
import page from '../../pages/resume';

class ResumeCreateSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openCreatePage() {
        this.page.openCreatePage();
    }

    create(data) {
        this.page.fillTitleForm(data.title);
        this.page.fillDescriptionForm(data.description);
        this.page.fillPlaceForm(data.place);
        this.page.fillSkillsForm(data.skills);
        this.page.submit();
    }

    getCreatedData () {
        return {
            place: this.page.getCreatedPlace()[0],
            description: this.page.getCreatedDescription()[0]
        }
    }
}

export default new ResumeCreateSteps();