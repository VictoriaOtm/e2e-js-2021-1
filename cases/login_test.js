import login from '../../e2e-js-2021-1/steps/login';
import navbar from '../../e2e-js-2021-1/steps/main/navbar';
import {strict as assert} from "assert";

// пример теста
describe('test login', () => {
  // используйте beforeEach хук для вызова account.auth(),
  // если вы тестируете НЕ авторизацию

  it('Авторизоваться и проверить, что логин совпадает', () => {
    login.open('https://qdaqda.ru/login');
    login.login();

    const l = navbar.getUserLogin();
    assert.strictEqual(
      l,
      process.env.LOGIN,
      `Логин авторизованного юзера ${l} не соответствует ожидаемому ${process.env.LOGIN}`,
    )


  });
});
