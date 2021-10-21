import account from "../steps/account";
import search from "../steps/search";
import assert from "assert";

describe('test search', () => {
    beforeEach(() => {
        account.auth();
        search.open('https://findfreelancer.ru/search');
    });

    it('Тест на работу поиска', () => {
        const {received, expected} = search.findMe();

        assert.strictEqual(
            received,
            expected,
            `Результат поиска не содержит вашего профиля с логином ${expected}`,
        )
    });
});
