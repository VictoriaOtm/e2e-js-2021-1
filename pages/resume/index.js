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

    get resumeData () {
        return {
            title: 'My Title',
            description: 'My cool resume',
            place: 'I very good',
            skills: 'My great skills',
        }
    }

    openCreatePage() {
        this.page.waitForVisible(this.locators.buttonCreate);
        this.page.click(this.locators.buttonCreate);
    }

    fillTitleForm () {
        this.page.waitForVisible(this.locators.title);
        this.page.click(this.locators.title);
        this.page.setValue(this.locators.title, this.resumeData.title);
    }

    fillDescriptionForm () {
        this.page.waitForVisible(this.locators.description);
        this.page.click(this.locators.description);
        this.page.setValue(this.locators.description, this.resumeData.description);
    }

    fillPlaceForm () {
        this.page.waitForVisible(this.locators.place);
        this.page.click(this.locators.place);
        this.page.setValue(this.locators.place, this.resumeData.place);
    }

    fillSkillsForm () {
        this.page.waitForVisible(this.locators.skills);
        this.page.click(this.locators.skills);
        this.page.setValue(this.locators.skills, this.resumeData.skills);
    }

    submit() {
        this.page.waitForVisible(this.locators.submitButton);
        this.page.click(this.locators.submitButton)
    }

    checkCreatedPlace() {
        this.page.waitForVisible(this.locators.placeText);
        const placeText = this.page.getText(this.locators.placeText);
        assert.strictEqual(
            placeText[0],
            this.resumeData.place,
            `Описание с сайта ${placeText[0]} не соответствует ожидаемому ${this.resumeData.place}`,
        )
    }

    checkCreatedDescription() {
        this.page.waitForVisible(this.locators.descriptionText);
        const descriptionText = this.page.getText(this.locators.descriptionText);
        assert.strictEqual(
            descriptionText[0],
            this.resumeData.description,
            `Описание с сайта ${descriptionText[0]} не соответствует ожидаемому ${this.resumeData.description}`,
        )
    }
}

export default new ResumeCreatePage();