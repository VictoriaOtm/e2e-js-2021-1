import account from '../steps/account';
import meetChat from  '../steps/chat_meet_id_1'

describe('chat test', () => {
    beforeEach(() => {
        account.open('https://onmeet.ru');
        account.login();
    });

    it('Отправить сообщение в чат', () => {
        const message = 'webdriverio test';

        meetChat.openChat();
        meetChat.sendMessage(message);
        meetChat.reopenChat();
        meetChat.checkLastSentMessageWith(message);
    });
});
