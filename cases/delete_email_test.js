import account from '../steps/account';
import mail from '../steps/mail';

describe('test email', () => {

    before(() => {
        account.open('https://account.mail.ru');
        account.login();
    });


    it('Удаление резервной почты', () => {
        mail.openPage();// Открываем страницу

        mail.openWindow(); //открываем окно для ввода почты

        mail.addNewEmail(); //Добавляем почту для дальнейшего удаления

        mail.closeSubmit(); //Закрываем добавление

        mail.deleteEmail(); //Удаляем почту и проверяем

    });

});