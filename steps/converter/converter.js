import DefaultSteps from '../default';
import page from '../../pages/converter/converter';

class ConverterSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openConverter() {
        this.page.clickOnConverter();
    }

    fillConverterFirstField(val) {
        this.page.fillFirstField(val)
        return this.page.getFirstFieldValue()
    }
}

export default new ConverterSteps();