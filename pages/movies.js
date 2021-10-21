import DefaultPage from './default';

class MoviesPage extends DefaultPage {
    constructor() {
        super('movies', '.content')
    }

    get locators() {
        return {
            topSlider: '.container',
            firstFilmCard: '.item__film-card:first-child',
            titleOfFirstFilm: '.item__film-card:first-child .item__film-card__title',
            genreSlider: '.genres',
            firstGenreCard: '.genre-item:first-child',
            genreName: 'data-genre',
        }
    }

    clickOnFirstGenre() {
        this.page.waitForVisible(this.locators.genreSlider);
        this.page.waitForVisible(this.locators.firstGenreCard);
        this.page.click(this.locators.firstGenreCard);
    }

    getNameOfFirstGenre() {
        this.page.waitForVisible(this.locators.genreSlider);
        this.page.waitForVisible(this.locators.firstGenreCard);

        return this.page.getAttribute(this.locators.firstGenreCard, this.locators.genreName);
    }

    clickOnFirstFilm() {
        this.page.waitForVisible(this.locators.topSlider);
        this.page.waitForVisible(this.locators.firstFilmCard);
        this.page.click(this.locators.firstFilmCard);
    }

    getNameOfFirstFilm() {
        this.page.waitForVisible(this.locators.topSlider);
        this.page.waitForVisible(this.locators.firstFilmCard);
        this.page.waitForVisible(this.locators.titleOfFirstFilm);
        return this.page.getText(this.locators.titleOfFirstFilm);
    }

}

export default new MoviesPage();
