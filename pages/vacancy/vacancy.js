import {strict as assert} from "assert";

class VacancyPage {
    constructor() {
        this.page = browser;
    }

    get locators() {
        return {
            errorSubmit: 'span.error',
            submitVacancy: 'button[id="send-form-empl"]',
            vacancyTitle: 'input[id="summary-name"]',
            vacancySalaryMin:'input[id="salary_min"]',
            vacancySalaryMax:'input[id="salary_max"]',
            createVacancyLink: 'a.menu-list-block__item_button',
        }
    }

    clickVacancyCreation() {
        const vacancyCreateBtnSelector = this.locators.createVacancyLink;

        this.page.waitForVisible(vacancyCreateBtnSelector); // Дожидаемся появления кнопки перехода на страницу создания вакансии
        this.page.click(vacancyCreateBtnSelector);
    }

    checkEmptyVacancyError() {
        const errorEmptyField = "Поле обязательно для заполнения.";
        const errorInvalidPhone = "Неверный номер телефона.";
        const expected = [
            '',
            errorEmptyField,
            errorEmptyField,
            errorEmptyField,
            errorEmptyField,
            '',
            errorInvalidPhone,
            '',
            errorEmptyField,
            ''
        ];

        const vacancyTitleSelector = this.locators.vacancyTitle;
        const submitVacancySelector = this.locators.submitVacancy;
        const errorsSubmitSelector = this.locators.errorSubmit;

        this.page.waitForVisible(vacancyTitleSelector); // Дожидаемся появления формы создания
        this.page.setValue(vacancyTitleSelector, "some title"); // заполняем некоторые поля формы вакансии (заголовок)
        this.page.click(submitVacancySelector);
        this.page.waitForVisible(errorsSubmitSelector);
        const errTextArray = this.page.getText(errorsSubmitSelector);

        assert.deepStrictEqual(
            errTextArray,
            expected,
            `Ошибки при создании незаполненной вакансии ${errTextArray} не соответствуют ожидаемым ${expected}`,
        )
    }

    checkInvalidSalary() {
        const errorInvalidSalary = "Минимальная зарплата не может быть больше максимальной";

        const vacancySalaryMinSelector = this.locators.vacancySalaryMin;
        const vacancySalaryMaxSelector = this.locators.vacancySalaryMax;
        const submitVacancySelector = this.locators.submitVacancy;
        const errorsSubmitSelector = this.locators.errorSubmit;

        this.page.waitForVisible(vacancySalaryMinSelector); // Дожидаемся появления формы создания
        this.page.setValue(vacancySalaryMinSelector, "20"); // заполняем поле минимальной зп
        this.page.setValue(vacancySalaryMaxSelector, "10"); // заполняем поле максимальной зп
        this.page.click(submitVacancySelector);
        this.page.waitForVisible(errorsSubmitSelector);
        const errTextArray = this.page.getText(errorsSubmitSelector);

        assert.strictEqual(
            errTextArray[5],
            errorInvalidSalary,
            `Ошибки при создании вакансии с зп мин > зп макс: ${errTextArray} не соответствуют ожидаемой ${errorInvalidSalary}`,
        )
    }
}

export default new VacancyPage();
