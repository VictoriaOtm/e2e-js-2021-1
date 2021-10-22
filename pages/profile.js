import DefaultPage from "./default";

class ProfilePage extends DefaultPage {
    constructor() {
        super('profile', '.main__profile-card');
    }

    get locators() {
        return {
            createPlaylistButton: '#create-playlist-button',
            createPlaylistInput: '#input-create-playlist',
            submitCreatePlaylist: '#submit-create-playlist',
            playlistsContainer: '#tabs',
            playlistsItems: '.tab__title',
            settingsLink: '#button-profile-settings a'
        };
    }

    getPlaylists() {
        this.page.waitForVisible(this.locators.playlistsContainer);
        return this.page.elements(this.locators.playlistsItems).value;
    }

    createPlaylist(name) {
        this.page.waitForVisible(this.locators.createPlaylistButton);
        this.page.click(this.locators.createPlaylistButton);
        this.page.waitForVisible(this.locators.createPlaylistInput);
        this.page.click(this.locators.createPlaylistInput);
        this.page.setValue(this.locators.createPlaylistInput, name);
        this.page.click(this.locators.submitCreatePlaylist);
    }
}

export default new ProfilePage();
