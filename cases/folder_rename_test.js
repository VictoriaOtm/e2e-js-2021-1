import account from '../steps/account';
import dialogues from '../steps/dialogues';
import {strict as assert} from "assert";


describe('Folders #1', () => {
	beforeEach(() => {
		account.auth();
	})

	it('Успешное создание папки и редактирование имени папки', () => {
		const prevName = "My lovely folder";
		const newName = "Worst folder in the world";
		dialogues.waitForList();
		dialogues.expandFolders();
		dialogues.createFolder(prevName);
		const folderName = dialogues.renameFolder(newName);
		assert.strictEqual(newName, folderName,
			`Название созданной папки ${folderName} не соответствует ожидаемому ${newName}`,
		)
		dialogues.deleteFolder();
	});
});