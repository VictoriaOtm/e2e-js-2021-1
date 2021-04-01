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

    it('Продажа', () => {
        rateList.openFirstRate();
        const before = ratePage.getHasForSell();
        const amount = 10;
        ratePage.fillInput(amount);
        ratePage.sell();
        ratePage.waitMessage();
        const after = ratePage.getHasForSell();
        assert.notEqual(
            before,
            after,
            `Значение не изменилось было ${before} стало ${after}`,
        );
    });

    afterEach(() => {
        ratePage.buy();
    })
});