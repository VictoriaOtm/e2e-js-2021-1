import account from '../steps/account';
import {strict as assert} from "assert";

describe('auth check', () => {
    it('Авторизоваться и проверить успешную авторизацию', () => {
        account.open('https://pinteo.ru/login');
        account.login();

        const profileHref = account.authorizedLogin;
        assert.strictEqual(
            profileHref,
            `https://pinteo.ru/@${process.env.LOGIN}`,
            `Username авторизованного юзера ${profileHref} не соответствует ожидаемому https://pinteo.ru/@${process.env.LOGIN}`,
        );
    });
});
