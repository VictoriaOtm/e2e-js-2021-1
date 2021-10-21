import account from '../../steps/account';
import cloud from '../../steps/folder';
import assert from "assert";

describe('create folder test', () => {
    // используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию
    beforeEach(() => {
        // account.auth() DOESNT WORK! element ("[data-test-id=login-app-read]") still not visible after 10000ms
        account.open('https://account.mail.ru');
        account.login();
    })


    it("create new folder", () => {
        cloud.open('https://cloud.mail.ru/');
        cloud.createDirectory();
        assert.strictEqual(cloud.checkCreatedFolderExists(), true);
    });
});
