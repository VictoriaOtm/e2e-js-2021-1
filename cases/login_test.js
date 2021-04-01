import account from '../steps/account';

describe('auth check', () => {
    it('Авторизоваться и проверить успешную авторизацию', () => {
        account.open('https://pinteo.ru/login');
        account.login();
    });
});
