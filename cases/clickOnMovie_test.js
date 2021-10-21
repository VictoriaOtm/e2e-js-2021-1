import movies from '../steps/movies';
import detailFilm from '../steps/detailFilm';


describe('test movies transfer on movie', () => {
    it('Страница фильмов. Переход на страницу фильма при нажатии на карточку фильма', () => {
        movies.open('https://redioteka.com/movies')
        const nameOfFirstFilm = movies.chooseFirstFilm();
        detailFilm.checkCorrectnessOfMovie(nameOfFirstFilm);
    });
});
