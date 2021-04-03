import account from '../../steps/account';
import desk_create from '../../steps/desk_create';
import {strict as assert} from "assert";

describe('test pinteo - create desk', () => {
    beforeEach(() => {
        account.auth();

        const profileUsername = account.getAuthorized();
        assert.strictEqual(
            profileUsername,
            process.env.LOGIN,
            `Авторизованный юзер ${profileUsername} не соответствует ожидаемому ${process.env.LOGIN}`,
        )
    })

    afterEach(() => {
        account.logout();
    })

    it('Проверка создания доски без названия и описания', () => {
        desk_create.createFullEmptyDesk();

        const isError = desk_create.checkEmptyTitleError();
        assert.strictEqual(
            isError,
            true,
            `Ожидалась ошибка (error_show=${true}), получено: ${isError}`,
        )
    });

    it('Проверка создания доски только с описанием', () => {
        const description = 'Hello I am description';
        desk_create.createDeskWithDescriptionOnly(description);

        const isError = desk_create.checkEmptyTitleError();
        assert.strictEqual(
            isError,
            true,
            `Ожидалась ошибка (error_show=${true}), получено: ${isError}`,
        )
    });
});
