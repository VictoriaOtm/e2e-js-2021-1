import account from '../steps/account';
import dialogues from '../steps/dialogues';


describe('Redactor #1', () => {
	beforeEach(() => {
		account.auth();
	})

	it('Успешная подстановка markdown-ссылки по клику на кнопку "ссылка"', () => {
		dialogues.waitForList();
		dialogues.openDialogue();
		dialogues.attachLink('http://ya.ru', 'текст ссылки')
		dialogues.sendMessage('');
		dialogues.checkLastMessageLink('http://ya.ru');
	});
});
