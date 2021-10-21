import DefaultPage from './default';

class GenrePage extends DefaultPage {
    constructor() {
        super('genre', '.content')
    }

    get locators() {
        return {
            genreTitle: '.item__page-title'
        }
    }

    getGenreTitle() {
        this.page.waitForVisible(this.locators.genreTitle);
        return this.page.getText(this.locators.genreTitle);
    }
}

export default new GenrePage();
