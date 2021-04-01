import DefaultPage from "./default";

class HeaderPage extends DefaultPage {
    constructor() {
        super('header', 'header[class=header]')
    }

    get locators() {
        return {
            avatar: '[class=header__control-avatar]',
            controlEmail: '[class=drop-down-menu__info]',
            settingsBtn: '[id=drop-down-settings-btn]'
        }
    }

    openControl() {
        this.page.waitForVisible(this.locators.avatar);
        this.page.click(this.locators.avatar);
        this.page.waitForVisible(this.locators.controlEmail);
    }

    openSettings() {
      this.openControl();
      this.page.click(this.locators.settingsBtn);
    }

    emailFromControl() {
        return this.page.getText(this.locators.controlEmail);
    }
}

export default new HeaderPage();
