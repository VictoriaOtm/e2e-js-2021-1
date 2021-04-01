import DefaultSteps from '../default';
import page from '../../pages/profile';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    goToProfile() {
        this.page.goToProfile();
    }

    checkAuthorizedEmail () {
        this.page.checkAuthorizedEmail(process.env.LOGIN);
    }
}

export default new ProfileSteps();