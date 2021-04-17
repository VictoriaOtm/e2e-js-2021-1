import account from '../steps/account';
import mail from '../steps/mail';

describe('test email', () => {

    before(() => {
        account.open('https://account.mail.ru');
        account.login();
    });

    it('Добавление резервной почты', () => {
        mail.openPage();// Открываем страницу

        mail.openWindow(); // Открываем окно для ввода почты

        mail.addNewEmail(); //Добавляем почту

        mail.checkAdding(); // проверяем

        mail.closeSubmit(); //Закрываем добавление

        mail.deleteEmail(); // чистим окружение, удаляем созданную почту

    });

});