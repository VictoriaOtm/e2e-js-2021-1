import account from '../steps/account';
import profile from '../steps/profile/index';
import {strict as assert} from "assert";


describe('profile test', () => {
	beforeEach(() => {
		account.open('https://onmeet.ru');
		account.login();
	});
	// используйте beforeEach хук для вызова account.auth(),
	// если вы тестируете НЕ авторизацию

	it('Изменение инфромации в поле "Навыки"', () => {
		profile.openProfile();
		const testSkill = "Test skill";
		profile.editSkills(testSkill);
		const actual = profile.getSkills()
		assert.strictEqual(
			testSkill,
			actual,
			`Текст поля "Навыки" ${actual} не соответствует ожидаемому ${testSkill}`,
		)
		profile.wipeSkills();
	});
});
