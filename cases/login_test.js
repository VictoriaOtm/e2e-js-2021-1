import login from '../steps/login';

describe('Тестирование авторизации', () => {
    it('Авторизоваться и проверить соответствие имени пользователя', () => {
        login.auth();
        login.checkUserNameAfterLogin();
    });
});
