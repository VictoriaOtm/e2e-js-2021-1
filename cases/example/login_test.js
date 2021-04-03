import { strict as assert } from 'assert';

import gnhAccount from '../../steps/gnhAccount';


describe('test auth', () => {
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
});
