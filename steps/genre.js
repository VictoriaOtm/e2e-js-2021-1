import DefaultSteps from './default';
import page from '../pages/genre';
import { strict as assert } from 'assert';

class GenreSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForGenre() {
        this.page.waitForContainer();
    }

    checkCorrectnessOfGenre(titleOfSelectedGenre) {
        this.waitForGenre()
        const title = this.page.getGenreTitle();
        assert.strictEqual(
            title,
            titleOfSelectedGenre,
            `Название выбранного жанра ${titleOfSelectedGenre} не соответствует ожидаемому ${title}`,
        );
    }

}

export default new GenreSteps();
