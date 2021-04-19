import account from '../steps/account';
import letters from '../steps/letters';

describe('Сценарий: Авторизация, открытие первого письма, открытие попапа, добавление в спам и выход', () => {
	beforeEach(() => {
		account.open('https://mailer.ru.com/signin');
		account.login();
	});

	it('Авторизоваться, открыть первое письмо на странице, открыть попап, добавить письмо в спам и выйти', () => {
		letters.moveToSpam();
	});

	after(() => {
		account.logout();
	});
});
