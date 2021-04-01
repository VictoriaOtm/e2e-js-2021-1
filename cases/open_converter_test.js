import account from '../steps/account';
import converter from '../steps/converter/converter';
import {strict as assert} from "assert";

describe('test open converter', () => {
    it('Авторизоваться и открыть конвертер', () => {
        account.open('https://softree.group/signin');
        account.login();

        converter.openConverter();

        const converterHeader = converter.page.getConverterHeader();
        assert.notEqual(
            converterHeader,
            '',
            'Не удалось открыть конвертер');
    });
});
