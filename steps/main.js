import DefaultSteps from './default';
import page from '../pages/main';

class MainSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    getUsername() {
        return this.page.getUsername();
    }
}

export default new MainSteps();
