import DefaultPage from './default';

class HeaderPage extends DefaultPage {
	constructor() {
		super('main', '#header');
	}

	get locators () {
		return {
			container: this.container,
			switchBtn: '.switch-btn',
			settingsBtn: '#home-icon__Settings',
			header: '#header',
		}
	}

	clickSwitch () {
		this.page.waitForVisible(this.locators.switchBtn);
		this.page.click(this.locators.switchBtn);
	}

	hidden() {
		const attribute = this.page.getAttribute(this.locators.header, 'hidden');
		return !!attribute;
	}
}

export default new HeaderPage();
