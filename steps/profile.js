import DefaultSteps from './default';
import page from '../pages/profile';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    changeDescription() {
        this.page.fillDescriptionForm(process.env.DESCRIPTION);
        this.page.submit();
        this.page.refresh();
        this.page.checkUpdatedDescription(process.env.DESCRIPTION);
    }
}

export default new ProfileSteps();
