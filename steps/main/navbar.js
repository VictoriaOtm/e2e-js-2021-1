import DefaultSteps from '../default';
import page from '../../pages/main/navbar';

class NavbarSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  getUserLogin() {
    return this.page.getUserLogin()
  }
}

export default new NavbarSteps();
