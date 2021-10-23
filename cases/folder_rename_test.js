import account from '../steps/account';
import dialogues from '../steps/dialogues';


describe('Folders #1', () => {
	beforeEach(() => {
		account.auth();
	})

	it('Успешное создание папки' /* и редактирование имени папки */, () => {
		dialogues.waitForList();
		dialogues.expandFolders();
		dialogues.createFolder("My lovely folder");
		// dialogues.renameFolder("My lovely folder", "Worst folder in the world"); // Ну не получилось, не фартануло
		// dialogues.deleteFolder("Worst folder in the world"); // Причина, почему не получилась, в определении этих функций в pages/dialogues.js
	});
});
