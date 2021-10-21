import account from "../steps/account";
import assert from "assert";

describe('test login', () => {
    it('Тест на правильную авторизацию', () => {
        account.open('https://findfreelancer.ru/login');
        const {expected, received} = account.login();

        assert.strictEqual(
            received,
            expected,
            `Login авторизованного юзера ${received} не соответствует ожидаемому ${expected}`,
        );
    });
});