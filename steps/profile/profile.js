import DefaultSteps from '../default';
import page from '../../pages/profile/profile';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
        this.userEmail = process.env.EMAIL;
    }

    openProfile() {
        this.page.clickProfile();
    }

    checkUserEmail () {
        this.page.checkEmailInProfile(this.userEmail);
    }
}

export default new ProfileSteps();
