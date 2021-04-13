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

    getUserEmails () {
        return  {
            expectedEmail: this.userEmail,
            actualEmail: this.page.getEmailFromProfile()
        }
    }
}

export default new ProfileSteps();
