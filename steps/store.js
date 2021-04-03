import DefaultSteps from './default';
import page from '../pages/store';

class StoreSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	order() {
		this.addToCart();
	}

	addToCart() {
        this.page.openStore();
		this.page.addFood();
	}
}

export default new StoreSteps();