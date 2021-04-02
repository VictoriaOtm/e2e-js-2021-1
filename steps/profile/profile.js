import DefaultSteps from '../default';
import page from '../../pages/profile/profile';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
        this.email = process.env.EMAIL;
    }

    goToProfile() {
        this.page.goToProfile();
    }

    checkEmail () {
        this.page.checkEmail(this.email);
    }
}

export default new ProfileSteps(); 