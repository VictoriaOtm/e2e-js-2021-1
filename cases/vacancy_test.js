import account from '../steps/authorization/authorization';
import vacancy from '../steps/vacancy/vacancy'

describe('test vacancy', () => {
    it('Ошибка при отправке вакансии с пустыми полями', () => {
        account.open('https://www.studhunt.ru/auth');
        account.login();

        vacancy.openVacancyCreation();
        vacancy.createEmpty();
    });
});
