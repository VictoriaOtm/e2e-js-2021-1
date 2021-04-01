import player from '../../steps/player';

// пример теста
describe('player', () => {
    // используйте beforeEach хук для вызова account.auth(),
    // если вы тестируете НЕ авторизацию

    it('player', () => {
        player.openMainPage();
        player.playVideo();
        player.closeVideo();
        player.checkHeader();
    });
});
