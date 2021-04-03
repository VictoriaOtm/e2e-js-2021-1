import DefaultSteps from './default';
import page from '../pages/desk_create'

class DeskCreateSteps extends DefaultSteps {
    constructor() {
        super(page);
        this.root = 'https://pinteo.ru';
    }

    createFullEmptyDesk() {
        this.open(this.root + '/create-board');
        this.page.submit();
    }

    createDeskWithDescriptionOnly(description) {
        this.open(this.root + '/create-board');
        this.page.fillDescriptionForm(description);
        this.page.submit();
    }

    checkEmptyTitleError() {
        return this.page.checkEmptyTitleError();
    }
}

export default new DeskCreateSteps();
