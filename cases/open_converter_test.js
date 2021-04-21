import account from '../steps/account';
import converter from '../steps/converter/converter';
import {strict as assert} from "assert";

describe('test open converter', () => {
    beforeEach(() => {
        account.open('https://softree.group/signin');
        account.login();
    });

    it('Ввод недопустимых символов в конвертер', () => {
        converter.openConverter();
        const converterFirstField = converter.fillConverterFirstField('!@#$%^&*();:')

        assert.Equal(
            converterFirstField,
            '',
            'Удалось ввести недопустимые символы');
    });
});
