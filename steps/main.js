import DefaultSteps from './default';
import page from '../pages/main';

class MainSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    waitForMain() {
        this.page.waitForContainer();
    }
}

export default new MainSteps();
