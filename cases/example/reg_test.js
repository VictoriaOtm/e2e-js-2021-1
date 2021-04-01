import reg from '../../steps/reg';

describe('Registration test', () => {
    it('Зарегистрироваться', () => {
        reg.open('https://musicexpress.sarafa2n.ru/signup/');
        reg.reg();
    });
});
