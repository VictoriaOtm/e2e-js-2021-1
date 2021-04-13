import DefaultSteps from '../default';
import page from '../../pages/profile';
import {strict as assert} from "assert";

class ProfileSteps extends DefaultSteps {
	constructor() {
		super(page);
		this.userLogin = process.env.LOGIN;
	}

	openProfilePage() {
		this.page.clickProfile();
	}

	checkProfileEmailField() {
		const headerEmail = this.page.checkData(this.userLogin);
		assert.strictEqual(
			headerEmail,
			this.userLogin,
			`Email авторизованного юзера ${headerEmail} не соответствует ожидаемому ${this.userLogin}`,
		)
	}
}

export default new ProfileSteps();
