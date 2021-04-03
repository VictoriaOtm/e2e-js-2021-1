import DefaultSteps from './default';
import page from '../pages/store';

class StoreSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	order() {
		return this.addToCart();
	}

	addToCart() {
        this.page.openStore();
		return this.page.addFood();
	}
}

export default new StoreSteps();