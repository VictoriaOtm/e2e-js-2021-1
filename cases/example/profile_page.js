import account from '../../steps/account';
import people from '../../steps/people';


describe('Open user page', () => {
	it('Переход на юзера', () => {
        account.open('https://onmeet.ru/people');
        people.clickToUser();
    });
});