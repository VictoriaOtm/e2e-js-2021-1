class ProfilePage {
    constructor() {
        this.page = browser;
        this.timeout = 2500;
    }

    get locators() {
        return {
            userEmail: 'div[id="email"]',
            createVacancyLink: 'a.menu-list-block__item_button',
            profileLink: 'a.menu-list-block__item_icon-profile',
            email: 'input[name="email"]',
            passwd: 'input[name="password"]',
            submitBtn: 'button[id="entBtnAuth"]'
        }
    }

    clickProfile() {
        const profileLinkSelector = this.locators.profileLink;

        this.page.waitForVisible(profileLinkSelector, this.timeout); // Дожидаемся появления иконки перехода в личный кабинет
        this.page.click(profileLinkSelector);
    }

    getEmailFromProfile() {
        const userEmailSelector = this.locators.userEmail;

        this.page.waitForVisible(userEmailSelector, this.timeout); // Дожидаемся появления информации об email пользователя
        return this.page.getText(userEmailSelector)
    }
}

export default new ProfilePage();
