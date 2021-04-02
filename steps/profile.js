import DefaultSteps from './default';
import page from '../pages/profile';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    changeDescription(description) {
        this.page.fillDescriptionForm(description);
        this.page.submit();
        this.page.refresh();
    }

    get currentDescription() {
        return this.page.description;
    }
}

export default new ProfileSteps();
