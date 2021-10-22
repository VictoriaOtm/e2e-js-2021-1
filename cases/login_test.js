import accountRedioteka from '../steps/account';
import profile from '../steps/profile';
import main from "../steps/main";


describe('test authorization', () => {
    it(`Авторизация. Введенный email соответсвует email'у на странице профиля`, () => {
        accountRedioteka.open('https://redioteka.com/login')
        const email = accountRedioteka.loginAndReturnEmail();
        main.waitForMain();
        profile.open('https://redioteka.com/profile');
        profile.checkAuthorizedEmail(email);
    });
});
