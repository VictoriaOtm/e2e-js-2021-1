import account from '../../steps/account';
import letters from '../../steps/letters/index';

describe('test change password', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('поменять пароль', () => {
        account.open('https://kino-park.online');
        account.auth();
        account.open('https://kino-park.online/profileChange');
        const oldPass = process.env.PASSWORD;
        const newPass = "testtest";
		account.changePassword(oldPass, newPass);
        account.logout();
        process.env.PASSWORD = newPass;
        account.auth();
        account.open('https://kino-park.online/profileChange');
        account.changePassword(newPass, oldPass);
        process.env.PASSWORD = oldPass;
	});
});