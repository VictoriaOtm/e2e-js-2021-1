import DefaultPage from './default';

class OrderPage extends DefaultPage {
	constructor() {
		super('account', '[data-test-id=login-app-read]')
	}

	get locators() {
		return {
			order_name: 'input[name="order_name"]',
			budget: 'input[name="budget"]',
            deadline: 'input[name="date"]',
            category: 'textarea[name="category"]',
            category_name: 'li[data-id="2"]',
            description: 'textarea[name="description"]',
			// nextButton: 'button[class="custom-form__submit"]',
			submitButton: 'button[id="send_mess"]',
			orderNameAfterCreate: 'div[class="orderPage__order_title"]',
		}
	}

	fillOrderNameForm () {
		this.page.waitForVisible(this.locators.order_name);
		this.page.click(this.locators.order_name);
		this.page.setValue(this.locators.order_name, "perepisat kurs s js na norm yazik");
	}

	fillBudgetForm () {
		this.page.waitForVisible(this.locators.budget);
		this.page.click(this.locators.budget);
		this.page.setValue(this.locators.budget, 228);
	}

    fillDeadlineForm () {
		this.page.waitForVisible(this.locators.deadline);
		this.page.click(this.locators.deadline);
		this.page.setValue(this.locators.deadline, 12122022);
	}

    selectCategory () {
		this.page.waitForVisible(this.locators.category);
		this.page.click(this.locators.category);
        this.page.waitForVisible(this.locators.category_name);
        this.page.click(this.locators.category_name);
	}

    fillDescriptionForm () {
		this.page.waitForVisible(this.locators.description);
		this.page.click(this.locators.description);
		this.page.setValue(this.locators.description, "strogaya tipozatsiya rulit, perepishite na go pls");
	}

	// next() {
	// 	this.page.waitForVisible(this.locators.nextButton);
	// 	this.page.click(this.locators.nextButton)
	// }

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

	checkCreateOrder() {
		this.page.waitForVisible(this.locators.orderNameAfterCreate);
		const headerOrderName = this.page.getText(this.locators.orderNameAfterCreate);
        const orderName = "perepisat kurs s js na norm yazik"

		return {headerOrderName, orderName}
	}
}

export default new OrderPage();
