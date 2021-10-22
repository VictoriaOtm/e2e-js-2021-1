import DefaultPage from './default';

class LoginPage extends DefaultPage {
  constructor() {
    super('login', '#wrapper')
  }

  get locators() {
    return {
      login: 'input[name="login"]',
      password: 'input[name="password"]',
      loginButton: '#postLogin',
      passwordError: '#passwordError',
      loginError: '#loginError',
      redirectToRegistration: '.form__bottom-text_anchor',
    }
  }

  fillLoginForm(login) {
    this.page.waitForVisible(this.locators.login);
    this.page.click(this.locators.login);
    this.page.setValue(this.locators.login, login);
  }

  fillPasswordForm(password) {
    this.page.waitForVisible(this.locators.password);
    this.page.click(this.locators.password);
    this.page.setValue(this.locators.password, password);
  }

  waitForWarnings() {
    this.page.waitForExist(this.locators.loginError)
    this.page.waitForExist(this.locators.passwordError)
  }

  submit() {
    this.page.waitForVisible(this.locators.loginButton);
    this.page.click(this.locators.loginButton)
  }

  goToRegistrationPage() {
    this.page.waitForVisible(this.locators.redirectToRegistration)
    this.page.click(this.locators.redirectToRegistration)
  }

}

export default new LoginPage();
