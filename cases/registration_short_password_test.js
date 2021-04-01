import account from '../steps/account';
import {strict as assert} from "assert";

describe('test short password registration', () => {
    it('При регистрации пароль короче 6 символов', () => {
        account.open('https://softree.group/signup');
        account.register(process.env.LOGIN, 'qwert');

        const errorMessage = account.page.getPasswordErrorMessage();
        assert.notEqual(
            errorMessage,
            '',
            'Не появилось сообщение об ошибке');
    });
});