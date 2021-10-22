import login from '../steps/login';
import register from '../steps/registration';
import {strict as assert} from "assert";

describe('test redirect from login page to registration page', () => {

  it('Проверить, что надпись на странице логина переводит на страницу регистрации', () => {
    login.open('https://qdaqda.ru/login');
    login.goToRegistrationPage();

    register.waitForContainer()
    const text = register.getFormTitleText()

    assert.strictEqual(
      text,
      "Регистрация",
      `Заголовок формы не совпадает с заголовком формы регистрации`,
    )
  });
});