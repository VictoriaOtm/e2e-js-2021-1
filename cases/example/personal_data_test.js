import account from '../../steps/account';
import personalData from '../../steps/personalData';

describe('test id.mail.ru раздел личные данные', () => {
    before(() => {
        account.open('https://account.mail.ru');
        account.login();
        account.open('https://id.mail.ru');
    });

    it('Перейти по ссылке "Настройки личных данных" и ввести имя длиннее 40 символов.', () => {
        personalData.waitForPersonalDataLink();
        personalData.openPersonalData();
        personalData.editFirstName('ХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХАХА');
    });
});
