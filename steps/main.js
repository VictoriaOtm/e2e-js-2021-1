import DefaultSteps from './default';
import page from '../pages/main';

class MainSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    getAuthUserEmail() {
        return this.page.getAuthUserEmail();
    }
}

export default new MainSteps();
