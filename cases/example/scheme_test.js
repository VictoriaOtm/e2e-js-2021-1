import account from '../../steps/account';
import header from '../../steps/header';

describe('Смена темы', () => {
	it('Сменить тему', () => {
		account.open('/');
		account.login();

		header.waitForHeader();
		header.switchScheme();
	});
});
