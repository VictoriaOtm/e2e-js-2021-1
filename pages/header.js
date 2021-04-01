import DefaultPage from "./default";

class HeaderPage extends DefaultPage {
    constructor() {
        super('header', 'header[class=header]')
    }

    get locators() {
        return {
            avatar: '[class=header__control-avatar]',
            controlEmail: '[class=drop-down-menu__info]'
        }
    }

    openControl() {
        this.page.waitForVisible(this.locators.avatar);
        this.page.click(this.locators.avatar);
        this.page.waitForVisible(this.locators.controlEmail);
    }

    emailFromControl() {
        return this.page.getText(this.locators.controlEmail);
    }
}

export default new HeaderPage();