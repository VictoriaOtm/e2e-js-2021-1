import account from '../steps/account';
import profile from '../steps/profile';

describe('profile editing check', () => {
    beforeEach(() => {
        account.auth();
    });

    it('Успешное изменение сведений о профиле на корректное', () => {
        profile.open('https://pinteo.ru/profile/edit');
        profile.changeDescription();
    });
});
