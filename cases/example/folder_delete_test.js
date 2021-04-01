import account from '../../steps/account';
import folder from '../../steps/folder';

describe('test id', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Удаление папки', () => {
		folder.open('https://cloud.mail.ru/home/');
		folder.deleteFolder(process.env.FOLDER);
	});
});
