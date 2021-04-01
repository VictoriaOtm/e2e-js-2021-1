import account from '../../steps/account';
import letters from '../../steps/letters/index';

describe('Сценарий: Авторизация, открытие первого письма', () => {
	it('Авторизоваться и открыть первое письмо на странице', () => {
		account.open('https://mailer.ru.com/signin');
		account.login();

		letters.waitForList();
		letters.openLetter();

		letters.waitButton();
		letters.clickButton();

		account.logout();

		// letters.toSpam();
	});
});
