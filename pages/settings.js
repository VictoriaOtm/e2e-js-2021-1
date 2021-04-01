import DefaultPage from "./default";
import header from './header';

class Settings extends DefaultPage {
  constructor() {
    super('settings', 'div[class="settings container"]')
  }

  get locators() {
    return {
      controlPanel: 'div[class=control-panel]',
      passBtn: 'div[class=action-btn]:nth-child(2)',
      avatarBtn: 'div[class=action-btn]:nth-child(1)',
      submitPass: 'input[class=submit-button]',
      email: '[id=username]',
      oldPass: 'input[name=oldPassword]',
      newPass: 'input[name=newPassword]',
      repeatPass: 'input[name=repeatPassword]',
      error: 'p[class=field__error]',
    }
  }

  openPassForm() {
    header.openSettings();

    this.page.waitForVisible(this.locators.controlPanel);
    this.page.click(this.locators.passBtn);
    this.page.waitForVisible(this.locators.submitPass);
  }

  openAvatarForm() {
    header.openSettings();

    this.page.waitForVisible(this.locators.controlPanel);
    this.page.click(this.locators.avatarBtn);
    this.page.waitForVisible(this.locators.submitPass);
  }

  getEmail() {
    return this.page.getText(this.locators.email);
  }

  setPass(oldPass, newPass) {
    this.page.setValue(this.locators.oldPass, oldPass);
    this.page.setValue(this.locators.newPass, newPass);
    this.page.setValue(this.locators.repeatPass, newPass);
    this.page.click(this.locators.submitPass);
  }



  isError() {
    if (this.locators.error.length > 0) {
      return true;
    }
    return false;
  }
}

export default new Settings();
