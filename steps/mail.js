import DefaultSteps from "./default";
import {foldersHref} from './../store/index';
import page from '../pages/mail';


class MailStep extends DefaultSteps {
    constructor() {
        super(page);
    }

    openPage() {
        this.open('https://id.mail.ru/' + foldersHref.contacts);
    }

   openWindow() {
        this.page.next();
   }

   addNewEmail() {
       this.page.inputEmail();
       this.page.submit();
       this.page.checkNewEmail();
   }

   deleteEmail() {
        this.page.deleteEmail();
        this.page.submitDeleting();
        this.page.checkDeletedEmail();
   }
}

export default new MailStep();