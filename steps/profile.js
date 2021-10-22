import DefaultSteps from "./default";
import page from '../pages/profile';
import { strict as assert } from 'assert';

class ProfileSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForProfile() {
        this.page.waitForContainer();
    }

    createPlaylist(name) {
        this.page.createPlaylist(name);
    }

    checkPlaylistAdded(name) {
        const playlistsElements = this.page.getPlaylists();
        const lastPlaylist = playlistsElements[playlistsElements.length - 1].getText();
        assert.strictEqual(
            lastPlaylist.toLowerCase(),
            name.toLowerCase(),
            `Название последнего добавленного плейлиста ${name} не соответствует ожидаемому ${lastPlaylist}`
        );
    }
}

export default new ProfileSteps();
