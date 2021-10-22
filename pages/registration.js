import DefaultPage from './default';

class RegistrationPage extends DefaultPage {
  constructor() {
    super('registration', '#wrapper')
  }

  get locators() {
    return {
      title: '.form__title',
    }
  }

  getFormTitleText () {
    this.page.waitForVisible(this.locators.title);
    return this.page.getText(this.locators.title);
  }

}

export default new RegistrationPage();
