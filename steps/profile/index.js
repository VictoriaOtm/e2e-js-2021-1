import DefaultSteps from '../default';
import page from '../../pages/profile';

class ProfileSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	openProfile() {
		this.page.clickMenu();
		this.page.clickProfile();
	}

	checkLogin() {
		this.page.checkProfileName(process.env.LOGIN);
	}

	editSkills() {
		let testSkill = "Test skill"
		this.page.clickEditSkills();
		this.page.fillSkillsField(testSkill);
		this.page.clickUpdateSkills();
		this.page.waitForUpdateConfirmation();
		this.page.checkSkillsField(testSkill);
	}

	wipeSkills() {
		this.page.clickEditSkills();
		this.page.fillSkillsField("");
		this.page.clickUpdateSkills();
		this.page.waitForUpdateConfirmation();
	}
}

export default new ProfileSteps();
