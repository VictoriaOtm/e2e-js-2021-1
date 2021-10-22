import auth from '../steps/auth';
import main from '../steps/main';

import assert from 'assert'

const AUTH_URL = 'https://mail.liokor.ru/auth';

describe('auth test', () => {
	beforeEach(() => {
		auth.open(AUTH_URL);
	});

	afterEach(() => {
		browser.deleteCookie();
	});

	it('Переход на страницу регистрации со страницы авторизации', () => {
		auth.navigateToSignUp();
	});

	it('Пустой логин', () => {
		auth.emptyLogin();

		const errLength = auth.getLoginError().length;
		assert.notStrictEqual(errLength, 0, 'Login error text is missing');
	});

	it('Пустой пароль', () => {
		auth.emptyPassword();

		const errLength = auth.getPasswordError().length;
		assert.notStrictEqual(errLength, 0, 'Password error text is missing');
	});

	it('Авторизация', () => {
		let usernameEntered = auth.login().toLowerCase();

		const usernameVisible = main.getAuthUserEmail().toLowerCase().split('@')[0];

		assert.strictEqual(usernameEntered, usernameVisible, `Expected ${usernameEntered}, received ${usernameVisible}`);
	});
});
