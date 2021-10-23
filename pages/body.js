import DefaultPage from './default';

class BodyPage extends DefaultPage {
	constructor() {
		super('body', 'body');
	}

	get locators() {
		return {
			body: 'body'
		};
	}

	getScheme() {
		return this.page.getAttribute(this.locators.body, 'scheme');
	}
}

export default new BodyPage();
