import DefaultSteps from "./default";
import page from "../pages/settings";

class SettingsSteps extends DefaultSteps {
  constructor() {
    super(page);
  }

  setPassword(old_pass, new_pass) {
    this.page.openPassForm();
    this.page.setPass(old_pass, new_pass);
    return this.page.isError();
  }

  getEmail() {
    this.page.openAvatarForm();
    return this.page.getEmail();
  }
}

export default new SettingsSteps();
