import DefaultSteps from "./default";
import page from "../pages/header";

class HeaderSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  getEmail() {
    this.page.openControl();
    return this.page.emailFromControl();
  }
}

export default new HeaderSteps();
