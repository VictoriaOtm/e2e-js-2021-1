import account from '../../steps/account';
import board from "../../steps/board";

describe('Открыть меню Редактировать папку', () => {
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию
	beforeEach(()=>{
		account.auth();
	});

	it('Открыть меню Редактировать папку', () => {
		board.open('https://e.mail.ru/settings/folders');
		board.openEditFolderPopup();
	});
});
