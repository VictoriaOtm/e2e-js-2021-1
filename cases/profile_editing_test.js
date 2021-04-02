import account from '../steps/account';
import profile from '../steps/profile';
import {strict as assert} from "assert";

describe('profile editing check', () => {
    beforeEach(() => {
        account.auth();
        const profileHref = account.authorizedLogin;
        assert.strictEqual(
            profileHref,
            `https://pinteo.ru/@${process.env.LOGIN}`,
            `Username авторизованного юзера ${profileHref} не соответствует ожидаемому https://pinteo.ru/@${process.env.LOGIN}`,
        );
    });

    afterEach(() => {
        account.logout();
    });

    it('Успешное изменение сведений о профиле на корректное', () => {
        const description = 'New description';
        profile.open('https://pinteo.ru/profile/edit');
        profile.changeDescription(description);

        const currentDescription = profile.currentDescription;
        assert.strictEqual(
            currentDescription,
            description,
            `Текущее описание профиля ${currentDescription} не соответствует ожидаемому ${description}`,
        );
    });
});
