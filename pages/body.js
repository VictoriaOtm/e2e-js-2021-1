import DefaultPage from './default';

class BodyPage extends DefaultPage {
	constructor() {
		super('body', 'body');
	}

	get locators() {
		return {
			container: this.container,
			body: 'body'
		};
	}

	getScheme() {
		const attribute = this.page.getAttribute(this.locators.body, 'scheme');
		return attribute;
	}
}

export default new BodyPage();
