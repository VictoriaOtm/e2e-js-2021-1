import DefaultSteps from './default';
import product from '../pages/product';

class ProductSteps extends DefaultSteps {
    constructor() {
        super(product);
    }

    likeProduct() {
        this.page.clickLike();
    }

    waitForProduct() {
        this.page.waitForContainer();
    }
}

export default new ProductSteps();
