import DefaultSteps from './default';
import page from '../../e2e-js-2021-1/pages/login';

class LoginSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  auth() {
    this.open('https://qdaqda.ru/login');
    this.waitForLogin();
    this.login();
  }

  login() {
    this.page.fillLoginForm(process.env.LOGIN);
    this.page.fillPasswordForm(process.env.PASSWORD);
    this.page.submit();
  }

  loginWrongData() {
    this.page.fillLoginForm(process.env.LOGIN+"aaa");
    this.page.fillPasswordForm(process.env.PASSWORD+"aaa");
    this.page.submit();
  }

  waitForWarnings() {
    this.page.waitForWarnings();
  }

  waitForLogin() {
    this.page.waitForContainer();
  }
}

export default new LoginSteps();
