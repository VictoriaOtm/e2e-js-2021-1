import account from '../../steps/account';
import folder from '../../steps/folder';

describe('test id', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Переименование папки', () => {
		folder.open('https://cloud.mail.ru/home/');
		folder.renameFolder(process.env.FOLDER);
	});
});
