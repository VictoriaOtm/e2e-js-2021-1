import search from "../steps/search";

describe('Search test', () => {
    it('При некорректном запросе выводится уведомление об ошибке', () => {
        search.open('https://musicexpress.sarafa2n.ru/search/');
        search.checkArtistQuery('!@#%$%^!@$%^#!@$^%!@');
    });
});
