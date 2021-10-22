
> Репозиторий для UI-тестов на js с использованием библиотеки Webdriverio v4z

## Установка
Убедитесь, что у вас установлены nvm и npm.

Важно: Используйте Node.js версии 10

- форкаем и клонируем репозиторий
- `nvm use 10`, если нет 10-й версии, устанавливаем: `nvm install 10`, затем снова `nvm use 10`
- устанавливаем зависимости `npm ci`


## Запуск тестов

В файле package.json замените урл в команде `"test": "wdio --baseUrl='https://e.mail.ru'"` на урл своего проекта.

Затем запускаем:
`LOGIN=<your_test_email> PASSWORD=<your_password> npm test`

**ВАЖНО! Не храните логин и пароль в git, за это будет снят 1 балл**

## Allure-репорт

`npm run report`

## Задание

1. Пишем тест на авторизацию (если у вас почтовый проект - используем готовый метод авторизации и пишем 2 других теста из чек-листа)
2. Пишем еще 1 тест из своего чек-листа. Эти тесты не должны повторять тесты товарищей по команде.
   
    _Итого должно быть 2 теста минимум_

3. Если осталось время, пишем 3-й тест за 1 доп. балл.
4. Делаем скриншот пройденных тестов в allure, кладем в корень проекта, пушим в гит
5. Делаем PR и скидываем [в табличку](https://docs.google.com/spreadsheets/d/11FhajaryptOdKtSXKEk8IwHZTCtQ1UudIZx6kf-41XA/edit#gid=1621448278) до 22:00

## Code review - часть задания
1. Берем из таблички 2 пулл-реквеста на проверку
2. Проверяем код не только на код-стайл, ошибки и опечатки, но и придерживаемся чек-листа:
- Никаких `browser.pause`, если нужно ждать элемент - использовать `waitFor`;
- Никаких циклов и условных операторов в коде самого теста, логику прячем в степ;
- Селекторы должны быть максимально короткими;
- Названия steps должны быть краткими и понятными, чтобы тест читался легко, как дока;
- Логика работы с браузером должна быть в pages, а логика работы с приложением - в steps;
- Каждый тест в отдельном файле, чтобы у каждого теста был новый инстанс браузера
3. Проверить и получить апрувы надо до 23.10.21 (суббота) 11:00

## FAQ
*1. А как мне сделать ... в тесте?*

Шаг 1. Смотрим [документацию по webdriverio v4](http://v4.webdriver.io/api.html). 

Шаг 2. Если не помогло, задать вопрос

*2. Где взять ящик/аккаунт для тестов?*

Его надо самим зарегистрировать в вашем проекте заранее. Логин и пароль в тесты нужно передавать через переменные окружения LOGIN и PASSWORD, в коде не должен быть указан пароль.
