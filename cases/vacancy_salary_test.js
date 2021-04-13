import account from "../steps/authorization/authorization";
import vacancy from "../steps/vacancy/vacancy";
import {strict as assert} from "assert";

describe('test vacancy', () => {
    it('Ошибка при вводе зарплаты, когда min > max', () => {
        account.login();

        vacancy.openVacancyCreation();
        const data = vacancy.createWithInvalidSalaryErrors();
        assert.strictEqual(
            data.expectedError,
            data.actualError,
            `Ошибки при создании вакансии с зп мин > зп макс: ${data.actualError} не соответствуют ожидаемой ${data.expectedError}`,
        )
    });
});
