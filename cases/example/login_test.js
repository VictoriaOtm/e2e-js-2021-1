import gnhAccount from '../../steps/gnhAccount';
import store from '../../steps/store';


describe('test id', () => {
	it('Зарегистрироваться на grassnearhome и перейти в профиль', () => {
		gnhAccount.open('https://grassnearhome.ru/login');
		gnhAccount.login();
	});

	it('Открыть первый магазин и добавить первый товар в корзину', () => {
		store.open('https://grassnearhome.ru');
		store.order();
	});
});
