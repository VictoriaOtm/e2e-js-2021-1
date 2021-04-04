import account from '../steps/account';
import letters from '../steps/letters';

describe('Сценарий: Авторизация, открытие первого письма, открытие попапа, добавление в спам и выход', () => {
	it('Авторизоваться, открыть первое письмо на странице, открыть попап, добавить письмо в спам и выйти', () => {
		account.open('https://mailer.ru.com/signin');
		account.login();

		letters.moveToSpam();

		account.logout();
	});
});
