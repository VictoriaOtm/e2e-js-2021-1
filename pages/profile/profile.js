import {strict as assert} from "assert";

class ProfilePage {
    constructor() {
        this.page = browser;
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

        this.page.waitForVisible(profileLinkSelector); // Дожидаемся появления иконки перехода в личный кабинет
        this.page.click(profileLinkSelector);
    }

    checkEmailInProfile(email) {
        const userEmailSelector = this.locators.userEmail;

        this.page.waitForVisible(userEmailSelector); // Дожидаемся появления информации об email пользователя
        const userEmail = this.page.getText(userEmailSelector);
        assert.strictEqual(
            userEmail,
            email,
            `Email авторизованного пользователя ${userEmail} не соответствует ожидаемому ${email}`,
        )
    }
}

export default new ProfilePage();
