import DefaultSteps from './default';
import page from '../pages/store';

class StoreSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	order() {
		this.open('https://grassnearhome.ru');
		this.addToCart();
	}

	addToCart() {
        this.page.openStore();
		this.page.addFood();
	}
}

export default new StoreSteps();