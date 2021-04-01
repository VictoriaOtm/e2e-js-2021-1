import DefaultSteps from './default';
import page from '../pages/chat_meet_id_1';

class MeetingChatSteps extends DefaultSteps {
    constructor() {
        super(page);
    }


    openChat(msg) {
        this.open('https://onmeet.ru/meeting?meetId=1');
        this.page.openChat();
        this.page.enterMessage(msg);
        this.page.send(msg);
    }

    waitForAccount() {
        this.page.waitForContainer();
    }
}

export default new MeetingChatSteps();
