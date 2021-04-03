import { strict as assert } from 'assert';

import store from '../../steps/store';


describe('test add to cart', () => {
	it('Открыть первый магазин и добавить первый товар в корзину', () => {
		store.open('https://grassnearhome.ru');
		const foodSign = store.order();
		const added = "Добавлено!";
		assert.strictEqual(
			foodSign,
			added,
			'Первый продукт успешно добавлен в корзину!',
		)
	});
});
