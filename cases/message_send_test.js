import account from '../steps/account';
import dialogues from '../steps/dialogues';


describe('Dialogues #2', () => {
	beforeEach(() => {
		account.auth();
	})

	it('Успешная отправка сообщения с любыми символами внутри', () => {
		dialogues.waitForList();
		dialogues.openDialogue();
		dialogues.sendMessage("Not so g00d message, HaHa");
	});
});
