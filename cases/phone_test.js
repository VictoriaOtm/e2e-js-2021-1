import account from '../steps/account';
import settings from '../steps/settings';

describe('test settings', () => {

    before(() => {
        account.open('https://account.mail.ru');
        account.login();
    });

    it('Зайти в контакты и адреса, попробовать добавить номер, закрыть окно для добавления номера', () => {
        settings.openPage();// Открываем страницу

        settings.openWindow(); // Открываем окно для ввода номера

        settings.cancelWindow(); //Закрывааем окно

    });


});
