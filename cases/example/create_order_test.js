import account from '../../steps/account';
import order from '../../steps/order';
import { strict as assert } from 'assert';

describe('test order create', () => {

	it('Создать заказ', () => {
        account.auth();
		const {headerOrderName, orderName} = order.create();
		assert.strictEqual(
			headerOrderName,
			orderName,
			`Имя заказа ${headerOrderName} не соответствует ожидаемому ${orderName}`,
		)
	});
});
