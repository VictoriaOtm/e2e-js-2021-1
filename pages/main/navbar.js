import DefaultPage from '../../../../../e2e-js-2021-1/pages/default';

class NavbarPage extends DefaultPage {
  constructor() {
    super('main', '#navbar')
  }

  get locators() {
    return {
      userNav: '#jsProfileNav',
      userLogin: '.navbar-profile-name',

  }
  }

  getUserLogin() {
    this.page.waitForVisible(this.locators.userLogin);
    return this.page.getText(this.locators.userLogin);
  }

  openProfileNav() {
    this.page.waitForVisible(this.locators.userNav);
    this.page.click(this.locators.userNav)
  }

}

export default new NavbarPage();
