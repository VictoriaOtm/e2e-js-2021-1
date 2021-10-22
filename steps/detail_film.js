import DefaultSteps from './default';
import page from '../pages/detail_film';
import { strict as assert } from 'assert';

class DetailFilmSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForDetailFilm() {
        this.page.waitForContainer();
    }

    checkCorrectnessOfMovie(titleOfSelectedMovie) {
        this.waitForDetailFilm()
        const title = this.page.getTitle();
        assert.strictEqual(
            title,
            titleOfSelectedMovie,
            `Название выбранного фильма ${titleOfSelectedMovie} не соответствует ожидаемому ${title}`,
        );
    }

}

export default new DetailFilmSteps();
