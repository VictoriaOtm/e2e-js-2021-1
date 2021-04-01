import resume from '../../steps/resume/index';
import account from '../../steps/account';

describe('test create resume', () => {
	beforeEach(function () {
		account.open('https://studhunt.ru/auth');
		account.login();
	});

	it('Создать резюме', () => {
		resume.openCreatePage();
		resume.create();
		resume.checkCreated();
	});
});
