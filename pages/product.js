import DefaultPage from './default';


class Product extends DefaultPage {
    constructor() {
        super('products', '.product-table')
    }

    get locators() {
        return {
            product: '.product-card__like',
        }
    }

    clickLike() {
        this.page.click(this.locators.product);
    }

}

export default new Product();
