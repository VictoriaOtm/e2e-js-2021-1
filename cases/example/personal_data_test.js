import account from '../../steps/account';
import personalData from '../../steps/personalData';

describe('test id.mail.ru personal data', () => {
    beforeEach(() => {
        account.open('https://account.mail.ru');
        account.login();
        account.open('https://id.mail.ru');
    });

    it('Переход по ссылке "Настройки личных данных".', () => {
        personalData.waitForPersonalDataLink();
        personalData.openPersonalData();
        personalData.editFirstName();
    });
});
