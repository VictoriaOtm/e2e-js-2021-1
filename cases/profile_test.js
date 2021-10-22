import login from '../steps/login'
import profile from "../steps/profile";

describe('Тестирование функций профиля', () => {
    beforeEach(() => {
        login.auth();
    });

    it('Создать новый плейлист на странице профиля', () => {
        const name = 'awesome playlist'
        profile.createPlaylist(name);
        profile.checkPlaylistAdded(name);
    });
});
