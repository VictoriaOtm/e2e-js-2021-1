
> Репозиторий для UI-тестов на js с использованием библиотеки Webdriverio v4

## Установка
Убедитесь, что у вас установлены nvm и npm.

Важно: Используйте Node.js версии 10

- форкаем и клонируем репозиторий
- `nvm use 10`, если нет 10-й версии, устанавливаем: `nvm install 10`, затем снова `nvm use 10`
- устанавливаем зависимости `npm i`


## Запуск тестов

В файле package.json замените урл в команде `"test": "wdio --baseUrl='https://e.mail.ru'"` на урл своего проекта.

Затем запускаем:
`LOGIN=<your_test_email> PASSWORD=<your_password> npm test`

![Uploading image.png…]()

