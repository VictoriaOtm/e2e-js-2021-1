import DefaultSteps from './default';
import product from '../pages/product';
import {strict as assert} from "assert";

class ProductSteps extends DefaultSteps {
    constructor() {
        super();
    }

    likeProduct() {
        product.clickLike();
    }

    waitForProduct() {
        this.page.waitForContainer();
    }
}

export default new ProductSteps();
