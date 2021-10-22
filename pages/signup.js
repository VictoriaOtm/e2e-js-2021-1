import DefaultPage from './default';

class SignupPage extends DefaultPage {
    constructor() {
        super('auth', 'div[class="signup"]')
    }
}

export default new SignupPage();
