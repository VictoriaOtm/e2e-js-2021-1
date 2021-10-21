import DefaultSteps from './default';
import page from '../pages/movies';

class MoviesSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    chooseFirstFilm() {
        const nameOfFirstFilm = this.page.getNameOfFirstFilm();
        this.page.clickOnFirstFilm();
        return nameOfFirstFilm;
    }

    chooseFirstGenre() {
        const nameOfFirstGenre = this.page.getNameOfFirstGenre();
        this.page.clickOnFirstGenre();
        return nameOfFirstGenre;
    }

    waitForMovies() {
        this.page.waitForContainer();
    }
}

export default new MoviesSteps();
