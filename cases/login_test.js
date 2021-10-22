import login from '../steps/login';

describe('Тест авторизации', () => {
    it('Авторизоваться и проверить соответствие имени пользователя', () => {
        login.auth();
        login.checkUserNameAfterLogin();
    });
});
