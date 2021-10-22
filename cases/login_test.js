import accountRedioteka from '../steps/account';
import profile from '../steps/profile';
import main from "../steps/main";


describe('test authorization', () => {
    it('Проверить правильность авторизации', () => {
        accountRedioteka.open('https://redioteka.com/login')
        const email = accountRedioteka.login();
        main.waitForMain();
        profile.open('https://redioteka.com/profile');
        profile.checkAuthorizedEmail(email);
    });
});
