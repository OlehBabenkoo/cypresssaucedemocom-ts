# Cypress test automation framework
The cypress end-to-end tests for the saucedemo.com

## Встановлення

Щоб встановити необіхдні інструменти для початку тестування необхідно в терміналі прописати наступну команду:

```sh
npm install
```

## Запуск тестів 

Щоб запустити тести в терміналі без UI частини необхідно прописати в терміналі наступну команду:

```sh
npx cypress run
```
Щоб запустити тести в  UI частині Cypress необхідно прописати в терміналі наступну команду:

```sh
npx cypress open
```

Щоб запустити лише одиш тест або один блок, потрібно додати до тесту або до блоку приставку .only
