import account from '../../steps/account';
import folder from '../../steps/folder';
import { strict as assert } from 'assert';

describe('test id', () => {
	beforeEach(() => {
		account.auth();
		folder.open('https://cloud.mail.ru/home/');
		folder.addFolder(process.env.FOLDER);
	});

	it('Переименование папки', () => {
		folder.open('https://cloud.mail.ru/home/');
		const folderName = process.env.FOLDER;
		const newFolderName = folderName + folderName;
		const returnedFolderName = folder.renameFolder(folderName, newFolderName);

		assert.strictEqual(
			newFolderName,
			returnedFolderName,
			`Ожидаем ${newFolderName}\nПолучаем ${returnedFolderName}`,
		)
	});
});
