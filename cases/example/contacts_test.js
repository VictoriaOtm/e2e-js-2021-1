import account from '../../steps/account';
import contacts from '../../steps/contacts';

describe('test id.mail.ru раздел контакты', () => {
    before(() => {
        account.open('https://account.mail.ru');
        account.login();
        account.open('https://id.mail.ru');
    });

    it('Переход по ссылке "Контакты".', () => {
        contacts.waitForContactsLink();
        contacts.openContacts();
    });
});
