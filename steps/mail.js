import DefaultSteps from "./default";
import {foldersHref} from './../store/index';
import page from '../pages/mail';
import assert from "assert";

const testEmail = 'sheb70017@gmail.com';

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
       // this.page.checkNewEmail();
   }

   checkDeleting() {
       const headerEmail = this.page.checkDeletedEmail();
       assert.strictEqual(
           headerEmail,
           testEmail,
           `Удаленный Email ${headerEmail} не соответствует ожидаемому ${testEmail}`,
       )
   }

   checkAdding() {
       const headerEmail = this.page.checkNewEmail();
       assert.strictEqual(
           headerEmail,
           testEmail,
           `Новый Email ${headerEmail} не соответствует ожидаемому ${testEmail}`,
       )
   }

   closeSubmit() {
        this.page.closeAdding();
   }

   deleteEmail() {
        this.page.deleteEmail();
        this.page.submitDeleting();
        // this.page.checkDeletedEmail();
   }
}

export default new MailStep();