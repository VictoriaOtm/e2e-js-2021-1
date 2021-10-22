import DefaultPage from './default';

class MainPage extends DefaultPage {
    constructor() {
        super('main', '.content')
    }
}
export default new MainPage();
