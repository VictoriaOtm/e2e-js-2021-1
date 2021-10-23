import DefaultPage from './default';
import { strict as assert } from 'assert';

class DialoguesPage extends DefaultPage {
	constructor() {
		super('Dialogues', '#messages-page');
		console.log(this.page)
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
			folderCurrent: 'input.folder[value="$1"]',
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

	/*
	Эти две функции я не знаю, как написать. И вот, почему:
	Вот схема иерархии тегов:
	<Большая кнопка папки>      # пускай селектор сюда будет ".folder"
		<Картинка>
		<Див с названием папки>  # тогда селектор сюда будет: ".folder > div=name"
		<Кнопки управления папкой>
			<Удалить>
			<Переименовать>
		</>
	</>

	И вот чтобы выбрать одну из кнопок "удалить" или "переименовать", нужно как-то написать селектор на них.
	Но я не могу составить селектор, проверяющий, что "сосед родителя имеет текст $text"

	Выбрать элемент с названием папки я могу. Селектор на него есть.
	Нужен какой-то способ дойти от дива с названием до кнопок. Я его не нашёл. Памагити :(

	deleteFolder (name) {
		const selector = this.locators.folderCurrent.replace('$1', prevName);
		this.page.waitForVisible(selector);
		this.page.click(selector);
	}

	renameFolder (prevName, newName) {
		console.log("wait")
		this.page.waitForVisible(this.locators.folderCurrent.replace('$1', prevName));
		console.log("waited")

		const inputSelector = this.locators.folderCurrent.replace('$1', name);
		const value = this.page.getAttribute(inputSelector, 'value');
		assert.strictEqual(name, value,
			`Название созданной папки ${value} не соответствует ожидаемому ${name}`,
		)
	}
	*/

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
