import login from '../steps/login';

// пример теста
describe('test wrong login', () => {

  it('Проверить, что при некорректных данных подсвечиваются поля', () => {
    login.open('https://qdaqda.ru/login');
    login.loginWrongData();

    login.waitForWarnings()

  });
});