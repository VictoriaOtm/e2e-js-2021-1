import login from '../../e2e-js-2021-1/steps/login';

// пример теста
describe('test wrong login', () => {

  it('Проверить, что при некорректных данных подсвечиваются поля', () => {
    login.open('https://qdaqda.ru/login');
    login.loginWrongData();

    login.waitForWarnings()

  });
});