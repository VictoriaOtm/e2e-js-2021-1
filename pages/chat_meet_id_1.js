import DefaultPage from './default';
import { strict as assert } from 'assert';

class MeetingChatPage extends DefaultPage {
    constructor() {
        super('account', '[data-test-id=login-app-read]')
    }

    get locators() {
        return {
            profileButton: 'div.header-mobile__logo-wrapper',
            login: 'input[name="login"]',
            password: 'input[name="password"]',
            submitButton: 'button.stdBtn.activable',
            profileLink: '#profileLink',
            authModal : '#authModal',
            profileName: 'h2.profile__name',
            chatIcon: '#accordion',
            openChatBtn: 'img.open-chat-button',
            chatMessageInput: 'textarea[name="message"]',
            sendChatBtn: 'button.send-chat-button',
            sentMsg: 'div.outgoing_msg'
        }
    }

    openChat() {
        this.page.waitForVisible(this.locators.chatIcon);
        this.page.moveToObject(this.locators.chatIcon);

        browser.pause(1500);
        this.page.waitForVisible(this.locators.openChatBtn);
        this.page.click(this.locators.openChatBtn);

    }

    enterMessage(msg) {
        this.page.waitForVisible(this.locators.chatMessageInput);
        this.page.click(this.locators.chatMessageInput);
        this.page.setValue(this.locators.chatMessageInput, msg);

    }

    send(msg) {
        this.page.waitForVisible(this.locators.sendChatBtn);
        this.page.click(this.locators.sendChatBtn);
        // this.page.waitForVisible(this.locators.authModal, 10000, true);

        browser.refresh();

        this.openChat();

        const sentMessages = this.page.getText(this.locators.sentMsg)
        const lastMsg = sentMessages[sentMessages.length - 1]

        const cutTo = lastMsg.indexOf('\n');
        const sentMsg = lastMsg.slice(0, cutTo);


        assert.strictEqual(
            msg,
            sentMsg,
            `Последнее отправленное сообщение ${sentMsg} не соответствует ожидаемому ${msg}`,
        )
    }

}

export default new MeetingChatPage();
