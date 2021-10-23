import DefaultSteps from "./default";
import page from '../pages/login';
import { strict as assert } from 'assert';

import dotenv from 'dotenv';
dotenv.config();

class LoginSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForLoginBox() {
        this.page.waitForContainer();
    }

    auth() {
        this.open('https://cinemedia.ru/login');
        this.waitForLoginBox();
        this.login();
    }

    login() {
        this.page.fillLoginInput(process.env.LOGIN);
        this.page.fillPasswordInput(process.env.PASSWORD);
        this.page.submit();
    }

    checkUserNameAfterLogin() {
        const usernameAfterLogin = this.page.getUserNameFromProfile();
        const username = process.env.LOGIN;
        assert.strictEqual(
            usernameAfterLogin,
            username,
            `Имя пользователя ${username} не соответствует ожидаемому ${usernameAfterLogin}`
        );
    }
}

export default new LoginSteps();
