import account from '../steps/account';
import currencyList from "../steps/currencyList";
import currencyStep from '../steps/currency';
import currency from '../pages/currency';
import {strict as assert} from "assert";

describe('Покупка/продажа', () => {
    beforeEach(() => {
        account.auth();
    });

    it('Продажа 0 денег', () => {
        currencyList.openFirstRate();
        const [before, after] = currencyStep.sell(0);
        assert.equal(
            before,
            after,
            `Значение изменилось было ${before} стало ${after}`,
        );
    });
});