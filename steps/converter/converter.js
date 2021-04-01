import DefaultSteps from '../default';
import page from '../../pages/converter/converter';

class ConverterSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openConverter() {
        this.page.clickOnConverter();
    }
}

export default new ConverterSteps();