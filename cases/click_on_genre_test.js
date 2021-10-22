import movies from '../steps/movies';
import genre from '../steps/genre';


describe('test movies transfer on genre', () => {
    it('Страница фильмов. Переход на страницу жанра при нажатии на карточку жанра', () => {
        movies.open('https://redioteka.com/movies')
        const nameOfFirstGenre = movies.chooseFirstGenre();
        genre.checkCorrectnessOfGenre(nameOfFirstGenre);
    });
});
