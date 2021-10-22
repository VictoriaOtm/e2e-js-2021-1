import account from '../../steps/account';
import cloud from '../../steps/move_file';
import assert from "assert";

// пример теста
describe('move file test', () => {
    beforeEach(() => {
        account.open('https://account.mail.ru');
        account.login();
    })


    it("move EXISTING file to EXISTING folder", () => {
        cloud.open('https://cloud.mail.ru/');
        cloud.moveFile();
        cloud.open(`https://cloud.mail.ru/home/${process.env.MOVE_FOLDER}`);
        assert.strictEqual(cloud.checkFileMoved(), true, `Cant move file ${process.env.MOVE_FILE} to folder ${process.env.MOVE_FOLDER}`);
    });
});
