import account from '../../steps/account';
import folder from '../../steps/folder';

describe('test id', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Создание папки', () => {
		folder.open('https://cloud.mail.ru/home/');
		folder.createFolder(process.env.FOLDER);
	});
});
