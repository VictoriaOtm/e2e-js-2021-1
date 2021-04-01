import account from '../../steps/account';
import desk_create from '../../steps/desk_create';

describe('test pinteo - create desk', () => {
    beforeEach(() => {
        account.auth();
    })

    afterEach(() => {
        account.logout();
    })

    it('Проверка создания доски без названия и описания', () => {
        desk_create.createFullEmptyDesk();
    });

    it('Проверка создания доски только с описанием', () => {
        const description = 'Hello I am description';
        desk_create.createDeskWithDescriptionOnly(description);
    });
});
