import account from '../../steps/account';
import cloud from '../../steps/move_file';
import assert from "assert";

// пример теста
describe('move file test', () => {
    // используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию
    beforeEach(() => {
        // account.auth() DOESNT WORK! element ("[data-test-id=login-app-read]") still not visible after 10000ms
        account.open('https://account.mail.ru');
        account.login();
    })


    it("move EXISTING file to EXISTING folder", () => {
        cloud.open('https://cloud.mail.ru/');
        cloud.moveFile();
        cloud.open(`https://cloud.mail.ru/home/${process.env.MOVE_FOLDER}`);
        assert.strictEqual(cloud.checkFileMoved(), true);
    });
});
