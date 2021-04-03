import account from '../../steps/account';
import people from '../../steps/people';

describe('Test favorites', () => {
    beforeEach(() => {
		account.open('https://onmeet.ru');
		account.login();
	});

	it('Избранные люди', () => {
		account.open('https://onmeet.ru/people');
		people.openFavorites();
	});
});