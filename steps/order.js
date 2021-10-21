import DefaultSteps from './default';
import page from '../pages/order';

class OrderSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	create() {
        this.open('https://findfreelancer.ru/order-create');
        this.page.fillOrderNameForm()
        this.page.fillBudgetForm()
        this.page.fillDeadlineForm()
        this.page.selectCategory()
        this.page.fillDescriptionForm()
		this.page.submit();
		return this.page.checkCreateOrder();
	}

	waitForAccount() {
		this.page.waitForContainer();
	}
}

export default new OrderSteps();
