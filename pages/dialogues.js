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
			folderInput: 'input.folder',
			folderRenameButton: '#dialogues-listing .folder:nth-child(2) #rename-folder',
			folderDeleteButton: '#dialogues-listing .folder:nth-child(2) #delete-folder',
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

	renameFolder (newName) {
		this.page.moveToObject(this.locators.folderRenameButton);
		this.page.waitForVisible(this.locators.folderRenameButton);
		this.page.click(this.locators.folderRenameButton);

		this.page.waitUntil(() => {return !this.page.getAttribute(this.locators.folderInput, 'readonly');});
		this.page.setValue(this.locators.folderInput, newName);
		return this.page.getAttribute(this.locators.folderInput, 'value');
	}

	deleteFolder () {
		this.page.moveToObject(this.locators.folderDeleteButton);
		this.page.waitForVisible(this.locators.folderDeleteButton);
		this.page.click(this.locators.folderDeleteButton);
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
