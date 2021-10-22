import DefaultPage from './default';


class Product extends DefaultPage {
    constructor() {
        super('products', '.product-table')
    }

    get locators() {
        return {
            productLike: '.product-card__like',
        }
    }

    clickLike() {
        this.page.click(this.locators.productLike);
    }

}

export default new Product();
