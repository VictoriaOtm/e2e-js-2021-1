import account from '../../steps/account';
import profile from "../../pages/profile";


// пример теста
describe('test 2', () => {
    // используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию
    it('Создание плэйлиста', () => {
        const playlist = "playlist";
        account.auth();
        profile.fillPlaylistField(playlist);
        profile.submit();
        profile.check(playlist);
        account.logout();
    });
});
