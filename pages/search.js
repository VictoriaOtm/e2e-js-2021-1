import DefaultPage from "../default";

class SearchPage extends DefaultPage {
    // OK
    constructor() {
        super('search', '#search__form');
    }

    // OK
    get locators() {
        return {
            searchInput: '#search',
            loginHeader: '.orders__order_nickname',
            submitButton: '.search__form_submit',
            filters: {
                findFor: '[name=what]',
            }
        };
    }

    get filters () {
        return {
            fillSearchFor: (data) => {
                this.page.waitForVisible(this.locators.filters.findFor);
                this.page.setValue(this.locators.filters.findFor, data);
            }
        }
    }

    // OK
    fillSearchInput(data) {
        this.page.waitForVisible(this.locators.searchInput);
        this.page.click(this.locators.searchInput);
        this.page.setValue(this.locators.searchInput, data);
    }

    // OK
    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

    // OK
    checkFindMe() {
        this.page.waitForVisible(this.locators.loginHeader);
        return this.page.getText(this.locators.loginHeader);
    }
}

export default new SearchPage()