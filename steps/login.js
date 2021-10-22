import DefaultSteps from './default';
import page from '../pages/login';

class LoginSteps extends DefaultSteps {
  constructor() {
    super(page);
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

}

export default new LoginSteps();
