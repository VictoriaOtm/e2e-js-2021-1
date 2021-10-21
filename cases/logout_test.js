import account from "../steps/account";
import assert from "assert";

describe('test logout', () => {
    it('Тест на проверку выхода из аккаунта', () => {
        account.auth();
        const isAuth = !!account.logout();

        assert.strictEqual(
            isAuth,
            false,
            `Не производиться выход из аккаунта при нажатии кпопки "Выход" в профиле`,
        );
    });
});