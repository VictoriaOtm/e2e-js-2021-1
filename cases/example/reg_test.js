import reg from '../../steps/reg';
import {strict as assert} from "assert";

describe('Registration test', () => {
    it('Зарегистрироваться', () => {
        reg.open('https://musicexpress.sarafa2n.ru/signup/');
        const settingsEmail = reg.reg();
        assert.strictEqual(
            settingsEmail,
            process.env.REG_EMAIL,
            `Email авторизованного юзера ${settingsEmail} не соответствует ожидаемому ${process.env.REG_EMAIL}`);
    });
});
