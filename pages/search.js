import DefaultPage from "./default";

class SearchPage extends DefaultPage {
    constructor() {
        super('search', '#search__form');
    }

    get locators() {
        return {
            searchInput: '#search',
            loginHeader: '.orders__order_nickname',
            submitButton: '.search__form_submit',
            filters: {
                findFor: '[name=what]',
                findForDropdown: {
                    onlyUsers: "[data-id='43']",
                },
            }
        };
    }

    get filters () {
        return {
            fillSearchFor: () => {
                this.page.waitForVisible(this.locators.filters.findFor);
                this.page.click(this.locators.filters.findFor);
                this.page.waitForVisible(this.locators.filters.findForDropdown.onlyUsers);
                this.page.click(this.locators.filters.findForDropdown.onlyUsers);
            }
        }
    }

    fillSearchInput(data) {
        this.page.waitForVisible(this.locators.searchInput);
        this.page.click(this.locators.searchInput);
        this.page.setValue(this.locators.searchInput, data);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

    checkFindMe() {
        this.page.waitForVisible(this.locators.loginHeader);
        return this.page.getText(this.locators.loginHeader);
    }
}

export default new SearchPage()