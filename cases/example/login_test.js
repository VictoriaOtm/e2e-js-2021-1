import { strict as assert } from 'assert';

import gnhAccount from '../../steps/gnhAccount';
import store from '../../steps/store';


describe('test id', () => {
	it('Зарегистрироваться на grassnearhome и перейти в профиль', () => {
		gnhAccount.open('https://grassnearhome.ru/login');
		const headerProfile = gnhAccount.auth();
        const originHeader = "Ваш профиль";
		assert.strictEqual(
			headerProfile,
			originHeader,
			'Страница профиля успешно открыта',
		)
	});

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
