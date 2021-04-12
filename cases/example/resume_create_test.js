import resume from '../../steps/resume/index';
import account from '../../steps/account';
import {strict as assert} from "assert";

describe('test create resume', () => {
	beforeEach(() => {
		account.auth();
	});

	it('Создать резюме', () => {
		const data = {
			title: 'My Title',
			description: 'My cool resume',
			place: 'I very good',
			skills: 'My great skills',
		}

		resume.openCreatePage();
		resume.create(data);
		const createdData = resume.getCreatedData();

		assert.strictEqual(
			createdData.place,
			data.place,
			`Описание с сайта ${createdData.place} не соответствует ожидаемому ${data.place}`,
		)

		assert.strictEqual(
			createdData.description,
			data.description,
			`Описание с сайта ${createdData.description} не соответствует ожидаемому ${data.description}`,
		)
	});
});
