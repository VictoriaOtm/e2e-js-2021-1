export default class DefaultSteps {
	constructor(page) {
		this.page = page;
	}

	open(path) {
		browser.url(path);
	}
	
	openWithDelay(path) { //КОСТЫЛЬ
		browser.pause(5000);
		this.open(path);
		browser.pause(5000);
	}
}
