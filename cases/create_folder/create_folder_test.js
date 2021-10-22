import account from '../../steps/account';
import cloud from '../../steps/folder';
import assert from "assert";

describe('create folder test', () => {
    beforeEach(() => {
        account.open('https://account.mail.ru');
        account.login();
    })


    it("create new folder", () => {
        cloud.open('https://cloud.mail.ru/');
        cloud.createDirectory();
        assert.strictEqual(cloud.checkCreatedFolderExists(), true, "Cant create a folder");
    });
});
