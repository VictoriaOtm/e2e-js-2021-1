import login from '../steps/login';
import navbar from '../steps/main/navbar';
import {strict as assert} from "assert";

describe('test login', () => {

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
