import DefaultSteps from './default';
import page from '../pages/player';

class PlayerSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openMainPage() {
        this.open('https://www.flicksbox.ru/browse');
        this.page.waitForContainer();
    }

    playVideo() {
        this.page.openPlayer();
    }

    closeVideo() {
        this.page.closePlayer();
    }

    checkHeader() {
        this.page.findHeader()
    }
}

export default new PlayerSteps();
