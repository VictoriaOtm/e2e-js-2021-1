import account from '../../steps/account';
import letters from '../../steps/letters/index';

describe('Сценарий: Авторизация, открытие первого письма, пометка непрочитанным и выход', () => {
	it('Авторизоваться, открыть первое письмо на странице, поставить непрочитанным и выйти', () => {
		account.open('https://mailer.ru.com/signin');
		account.login();

		letters.waitForList();
		letters.openLetter();

		letters.waitButton();
		letters.clickButton();

		account.logout();
	});
});

describe('Сценарий: Авторизация, открытие первого письма, пометка непрочитанным и выход', () => {
	it('Авторизоваться, открыть первое письмо на странице, поставить непрочитанным и выйти', () => {
		account.open('https://mailer.ru.com/signin');
		account.login();

		letters.waitForList();
		letters.openLetter();

		letters.toSpam();

		account.logout();
	});
});
