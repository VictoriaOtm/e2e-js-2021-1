import account from '../../steps/account';
import board from "../../steps/board";

describe('Открыть меню Добавить папку', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию
	before(()=>{
		account.auth();
	});

	it('Открыть меню Добавить папку', () => {
		board.open('https://e.mail.ru/settings/folders');
		board.openAddFolderPopup();
	});
});
