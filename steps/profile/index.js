import DefaultSteps from '../default';
import page from '../../pages/profile';

class ProfileSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openProfilePage() {
		this.page.waitForContainer();
		this.page.clickProfile();
		this.page.checkData(process.env.LOGIN);
	}
}

export default new ProfileSteps();
