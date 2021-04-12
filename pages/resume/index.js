import DefaultPage from '../default';
import {strict as assert} from "assert";

class ResumeCreatePage extends DefaultPage {
    constructor() {
        super('create', '.main')
    }

    get locators () {
        return {
            buttonCreate: 'a[href="/createResume"]',
            title: 'input[name="title"]',
            description: 'textarea[name="description"]',
            place: 'input[name="place"]',
            skills: 'textarea[name="skills"]',
            submitButton: 'button[id="send-form-cand"]',

            placeText: 'div.about-candidate__p',
            descriptionText: 'div.job-description__p',
        }
    }

    openCreatePage() {
        this.page.waitForVisible(this.locators.buttonCreate);
        this.page.click(this.locators.buttonCreate);
    }

    fillTitleForm (title) {
        this.page.waitForVisible(this.locators.title);
        this.page.click(this.locators.title);
        this.page.setValue(this.locators.title, title);
    }

    fillDescriptionForm (description) {
        this.page.waitForVisible(this.locators.description);
        this.page.click(this.locators.description);
        this.page.setValue(this.locators.description, description);
    }

    fillPlaceForm (place) {
        this.page.waitForVisible(this.locators.place);
        this.page.click(this.locators.place);
        this.page.setValue(this.locators.place, place);
    }

    fillSkillsForm (skills) {
        this.page.waitForVisible(this.locators.skills);
        this.page.click(this.locators.skills);
        this.page.setValue(this.locators.skills, skills);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

    getCreatedPlace() {
        this.page.waitForVisible(this.locators.placeText);
        return this.page.getText(this.locators.placeText);
    }

    getCreatedDescription() {
        this.page.waitForVisible(this.locators.descriptionText);
        return this.page.getText(this.locators.descriptionText);
    }
}

export default new ResumeCreatePage();