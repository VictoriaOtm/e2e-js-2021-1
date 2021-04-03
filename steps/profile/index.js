import DefaultSteps from '../default';
import page from '../../pages/profile';

class ProfileSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.userLogin = process.env.LOGIN;
	}

	openProfilePage() {
		this.page.clickProfile();
	}

	checkProfileEmailField() {
		this.page.checkData(this.userLogin);
	}
}

export default new ProfileSteps();
