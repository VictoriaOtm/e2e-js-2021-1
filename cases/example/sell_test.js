import account from '../../steps/account';
import rateList from "../../steps/rateList";
import ratePage from '../../pages/rate';
import {strict as assert} from "assert";

// пример теста
describe('test id', () => {
// 	используйте beforeEach хук для вызова account.auth(),
// 	если вы тестируете НЕ авторизацию
    beforeEach(() => {
        account.auth();
    });

    it('Очищение поля после покупки', () => {
        rateList.openFirstRate();
        ratePage.fillInput(100);
        ratePage.buy();
        const value = ratePage.getInputValue();
        assert.strictEqual(
            value,
            '',
            `Поле не очистилось после покупки`,
        )
    });
});