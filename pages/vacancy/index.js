import DefaultPage from '../default';

class VacancyPage extends DefaultPage {
    constructor() {
        super('vacancy', 'div[id="main"]')
    }

    get locators () {
        return {
            container: this.container,
            hrefToVacancy: 'a[href="/employersList"]',
            mainList: 'div.header-row-bottom',
            hrefToFirstElement: 'div.list-row',
            vacancyBody: '.main-content',
        }
    }

    clickVacancy() {
        this.page.waitForVisible(this.locators.mainList);
        this.page.click(this.locators.hrefToVacancy);
    }

    openFirst() {
        this.page.waitForVisible(this.locators.container);
        this.page.click(this.locators.hrefToFirstElement);
    }

    checkVacancyOpened () {
        this.page.waitForVisible(this.locators.vacancyBody);
    }
}

export default new VacancyPage();
