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
}

export default new VacancyPage();
