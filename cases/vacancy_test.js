import account from '../steps/authorization/authorization';
import vacancy from '../steps/vacancy/vacancy'

describe('test vacancy', () => {
    before(() => {
        account.open('https://www.studhunt.ru/auth');
        account.login();
    });

    it('Ошибка при отправке вакансии с пустыми полями', () => {

        vacancy.openVacancyCreation();
        vacancy.createEmpty();
    });

    it('Ошибка при вводе зарплаты, когда min > max', () => {

        vacancy.openVacancyCreation();
        vacancy.createWithInvalidSalary();
    });
});
