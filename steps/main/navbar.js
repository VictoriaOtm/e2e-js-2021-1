import DefaultSteps from '../../../../../e2e-js-2021-1/steps/default';
import page from '../../../e2e-js-2021-1/pages/main/navbar';
import {strict as assert} from "assert";

class NavbarSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  openProfileNav() {
    this.page.openProfileNav();
  }

  waitForNavbar() {
    this.page.waitForContainer();
  }

  getUserLogin() {
    return this.page.getUserLogin()
  }
}

export default new NavbarSteps();
