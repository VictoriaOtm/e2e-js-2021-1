import resume from '../../steps/resume/index';
import account from '../../steps/account';

describe('test create resume', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Создать резюме', () => {
		resume.openCreatePage();
		resume.create();
		resume.checkCreated();
	});
});
