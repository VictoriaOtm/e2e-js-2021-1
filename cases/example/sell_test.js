import account from '../../steps/account';
import rateList from "../../steps/rateList";
import ratePage from '../../pages/rate';
import {strict as assert} from "assert";

describe('Продажа', () => {
    beforeEach(() => {
        account.auth();
    });

    it('Изменение суммы кошелька при продаже валюты', () => {
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