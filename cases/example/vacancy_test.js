import account from '../../steps/account';
import vacancy from '../../steps/vacancy/index';


// пример теста
describe('test vacancy', () => {

    beforeEach(() => {
        account.auth();
    })

    it('Авторизоваться и открыть страницу со списком вак', () => {
        vacancy.openVacancyPage();
    });

});
