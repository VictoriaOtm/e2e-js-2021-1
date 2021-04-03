import account from '../../steps/account';
import vacancy from '../../steps/vacancy/index';


describe('test vacancy', () => {

    beforeEach(() => {
        account.auth();
    })

    it('Авторизоваться, открыть страницу со списком ваканасий и перейти в 1ую вакансию', () => {
        vacancy.openVacancyPage();
        vacancy.checkVacancyPageIsOpened();
    });

});
