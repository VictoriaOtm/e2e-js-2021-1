import account from '../../steps/account';
import profile from "../../pages/profile";
import {strict as assert} from "assert";


// пример теста
describe('test 2', () => {
    // используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию
    beforeEach(() => {
        account.auth();
    });

    afterEach(() => {
        account.logout();
    });

    it('Создание плэйлиста', () => {
        const playlist = "playlist";
        profile.fillPlaylistField(playlist);
        profile.submit();
        let text = profile.check(playlist);
        console.log(text);
        assert.strictEqual(
            playlist,
            text,
            `Название плэйлиста не совпадает с ожидаемым`,
        )
    });
});
