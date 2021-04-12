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

		assert.deepStrictEqual(createdData, {
				description: data.description,
				place: data.place,
			},
			`Описание с сайта ${createdData} не соответствует ожидаемому ${data}`,
		);
	});
});
