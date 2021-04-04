import DefaultSteps from './default';
import page from '../pages/chat_meet_id_1';
import {strict as assert} from "assert";

class MeetingChatSteps extends DefaultSteps {
    constructor() {
        super(page);
    }


    openChat() {
        this.open('https://onmeet.ru/meeting?meetId=1');
        this.page.openChat();
    }

    sendMessage(msg) {
        this.page.enterMessage(msg);
        this.page.sendEnteredMessage();
    }

    reopenChat() {
        browser.refresh();
        this.page.openChat();
    }

    checkLastSentMessageWith(expectedMessage) {
        const lastSentMessage = this.page.getLastSentMessage();
        assert.strictEqual(
            expectedMessage,
            lastSentMessage,
            `Последнее отправленное сообщение ${lastSentMessage} не соответствует ожидаемому ${expectedMessage}`,
        )
    }

}

export default new MeetingChatSteps();
