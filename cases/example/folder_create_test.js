import account from '../../steps/account';
import folder from '../../steps/folder';
import { strict as assert } from 'assert';

describe('test id', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Создание папки', () => {
		folder.open('https://cloud.mail.ru/home/');
		const folderName = process.env.FOLDER;
		const returnedFolderName = folder.createFolder(folderName);

		assert.strictEqual(
			folderName,
			returnedFolderName,
			`Ожидаем ${folderName}\nПолучаем ${returnedFolderName}`,
		)
	});
});
