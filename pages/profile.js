import DefaultPage from './default';
import { strict as assert } from 'assert';

class PlaylistPage extends DefaultPage {
    constructor() {
        super('account', '[href="/search"]')
    }

    get locators() {
        return {
            playlistInput: 'input[placeholder="Напишите название"]',
            submit: '//button[text()="Создать"]',
            nameOfPlaylist: 'div[class="name__filmlenta_genre--2DRas"]',
        }
    }

    submit() {
        this.page.click(this.locators.submit);
    }

    fillPlaylistField(name) {
        this.page.waitForVisible(this.locators.playlistInput);
        this.page.setValue(this.locators.playlistInput, name);
    }

    check(name) {
        this.page.waitForVisible(this.locators.nameOfPlaylist);
        const text = this.page.getText(this.locators.nameOfPlaylist);
        assert.strictEqual(
            name,
            text[0],
            `Название плэйлиста не совпадает с ожидаемым`,
        )
    }
}

export default new PlaylistPage();
