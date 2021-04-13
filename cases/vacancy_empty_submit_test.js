import account from '../steps/authorization/authorization';
import vacancy from '../steps/vacancy/vacancy'
import {strict as assert} from "assert";


describe('test vacancy', () => {
    it('Ошибка при отправке вакансии с пустыми полями', () => {
        account.login();

        vacancy.openVacancyCreation();
        const data = vacancy.createEmptyErrors();
        assert.deepStrictEqual(
            data.expectedErrors,
            data.actualErrors,
            `Ошибки при создании незаполненной вакансии ${data.actualErrors} не соответствуют ожидаемым ${data.expectedErrors}`,
        )
    });
});
