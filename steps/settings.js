import DefaultSteps from "./default";
import {foldersHref} from './../store/index';
import page from '../pages/phone';


class SettingsStep extends DefaultSteps {
    constructor() {
        super(page);
    }

    openPage() {
        this.open('https://id.mail.ru/' + foldersHref.contacts);
    }

    openWindow() {
        this.page.next();
        this.page.changeCountry();
    }

    cancelWindow() {
        this.page.cancel();
    }
}

export default new SettingsStep();