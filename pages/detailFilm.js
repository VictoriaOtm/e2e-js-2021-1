import DefaultPage from './default';

class DetailFilmPage extends DefaultPage {
    constructor() {
        super('detailFilm', '.detail-preview')
    }

    get locators() {
        return {
            title: '.detail-preview__title'
        }
    }

    getTitle() {
        this.page.waitForVisible(this.locators.title);
        return this.page.getText(this.locators.title);
    }
}

export default new DetailFilmPage();
