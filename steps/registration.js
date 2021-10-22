import DefaultSteps from './default';
import page from '../pages/registration';

class RegistrationSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  waitForContainer () {
    this.page.waitForContainer();
  }

  getFormTitleText () {
    return this.page.getFormTitleText();
  }

}

export default new RegistrationSteps();
