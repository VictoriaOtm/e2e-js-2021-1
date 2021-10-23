import account from '../steps/account';
import dialogues from '../steps/dialogues';


describe('Dialogues #1', () => {
	beforeEach(() => {
		account.auth();
	})

	// Формулировки названий взяты из чек-листов
	it('Успешное открытие переписки по клику на диалог', () => {
		dialogues.waitForList();
		dialogues.openDialogue();
	});
});
