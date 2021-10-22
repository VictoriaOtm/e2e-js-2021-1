import product from '../steps/product';
import account from '../steps/account';


describe('product', () => {
	it('Ошибка лайка товара не авторизованному пользователю', () => {
		product.open('https://ykoya.ru');
		product.likeProduct();
		account.checkOpened();
	});
});
