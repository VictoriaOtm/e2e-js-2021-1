import account from '../steps/account';
import history from '../steps/history';
import {strict as assert} from "assert";

describe('История', () => {
    beforeEach( () => {
        account.auth()
    });

    it('тык по истории', () => {
        history.openHistory();
        history.clickHistoryArrow();
    });
});