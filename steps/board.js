import DefaultSteps from './default';
import page from '../pages/board';

class BoardSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

    openAddFolderPopup() {
		this.page.openAddFolderPopup();
	}

	openEditFolderPopup() {
		this.page.openEditFolderPopup();
	}
}

export default new BoardSteps();