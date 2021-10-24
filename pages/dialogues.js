import DefaultPage from './default';
import { strict as assert } from 'assert';

class DialoguesPage extends DefaultPage {
	constructor() {
		super('Dialogues', '#messages-page');
	}

	get locators () {
		return {
			container: this.container,
			dialogues: '#dialogues-listing',
			dialogue: '#dialogues-listing li:not(.folder)',
			folder: '#dialogues-listing .folder',
			messages: '#messages-listing',
			messageBlocks: '.message-block',
			createFolderButton: '.new-folder-button',
			folderInput: 'input.folder[value="$1"]',
			renameFolderButtons: '#rename-folder',
			expandFoldersButton: '.folders-button',
			overlayInput: '.modal input',
			overlaySubmit: '.modal .submit',
			messageInput: '.message-input',
			messageSendButton: '#message-send-button',
			lastYourMessage: '#messages-listing > div.right-block:last-child',
			redactorLinkButton: '#link-markdown'
		}
	}

	clickDialogue () {
		this.page.waitForVisible(this.locators.dialogue);
		this.page.click(this.locators.dialogue);
	}

	clickFolder () {
		this.page.waitForVisible(this.locators.folder);
		this.page.click(this.locators.folder);
	}

	expandFolders () {
		this.page.waitForVisible(this.locators.expandFoldersButton);
		this.page.click(this.locators.expandFoldersButton);
		this.page.waitForVisible(this.locators.folder);
	}

	clickNewFolder () {
		this.page.waitForVisible(this.locators.createFolderButton);
		this.page.click(this.locators.createFolderButton);
	}

	fillOverlay (text) {
		this.page.waitForVisible(this.locators.overlayInput);
		this.page.setValue(this.locators.overlayInput, text);
	}

	submitOverlay () {
		this.page.waitForVisible(this.locators.overlaySubmit);
		this.page.click(this.locators.overlaySubmit);
	}

	renameFolder (prevName, newName) {
		const selector = this.locators.folderInput.replace('$1', prevName);
		this.page.waitForVisible(selector); // not working
		const input = this.page.elements(selector); // this object has no .parenElement
		// I CAN'T GET PARENT ELEMENT. I DON'T KNOW HOW TO DO IT
		const renameButton = input.parentElement.parentElement.parentElement.querySelector("#rename-folder")

		this.page.click(renameButton);
		input.clear();
		this.page.setValue(input, newName);
		return this.page.getAttribute(input, 'value');
	}

	deleteFolder (name) {
		const input = this.page.element(this.locators.folderInput.replace('$1', name))
		const deleteButton = input.parentElement.parentElement.parentElement.querySelector("#delete-folder")

		this.page.waitForVisible(deleteButton);
		this.page.click(deleteButton);
	}

	checkDialogueOpened () {
		this.page.waitForVisible(this.locators.messageBlocks);
	}

	getFoldersHeight () {
		return this.page.getElementSize(this.locators.dialogues, "height")
	}

	fillMessage(text) {
		this.page.waitForVisible(this.locators.messageInput);
		this.page.setValue(this.locators.messageInput, text);
	}

	sendMessage() {
		this.page.waitForVisible(this.locators.messageSendButton);
		this.page.click(this.locators.messageSendButton);
	}

	checkSentMessage(text) {
		this.page.waitForVisible(this.locators.lastYourMessage.replace('$1', text));
	}

	clickRedactorLink() {
		this.page.waitForVisible(this.locators.redactorLinkButton);
		this.page.click(this.locators.redactorLinkButton);
	}
}

export default new DialoguesPage();
