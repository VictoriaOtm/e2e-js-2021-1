import DefaultSteps from '../default';
import page from '../../pages/profile';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
        this.email = process.env.LOGIN;
    }

    goToProfile() {
        this.page.goToProfile();
    }

    checkAuthorizedEmail () {
        this.page.checkAuthorizedEmail(this.email);
    }
}

export default new ProfileSteps();