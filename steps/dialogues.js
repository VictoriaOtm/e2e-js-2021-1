import DefaultSteps from './default';
import page from '../pages/dialogues';
import { strict as assert } from 'assert';

class DialoguesSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForList() {
		this.page.waitForContainer();
	}

	openDialogue () {
		this.page.clickDialogue();
		this.page.checkDialogueOpened();
	}

	expandFolders () {
		this.page.expandFolders()
	}

	createFolder (name) {
		const start = this.page.getFoldersHeight()
		this.page.clickNewFolder()
		this.page.fillOverlay(name)
		this.page.submitOverlay()
		const end = this.page.getFoldersHeight()
		assert.strictEqual(start < end, true, // выглядит так себе, но я чет не нашёл проверки вроде compare
			`Начальная высота списка папок не меньше конечного: ${start} !< ${end}`,
		)
	}

	renameFolder (prevName, newName) {
		this.page.renameFolder(prevName, newName)
	}

	deleteFolder (name) {
		this.page.deleteFolder(name)
	}

	sendMessage(text) {
		this.page.fillMessage(text);
		this.page.sendMessage();
		this.page.checkSentMessage(text);
	}

	clickRedactorLink() {
		this.page.clickRedactorLink();
	}

	checkLastMessageLink(linkText) {
		this.page.clickRedactorLink();
		this.page.waitForUrl(linkText, 3, true);
	}

	attachLink(href, text) {
		this.page.clickRedactorLink();
		this.page.fillOverlay(href);
		this.page.submitOverlay();
		this.page.fillOverlay(text);
		this.page.submitOverlay();
	}
}

export default new DialoguesSteps();
