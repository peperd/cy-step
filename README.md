# Tests for  step SaaS
## Javascript stack Cypress framework
### Getting started


#### Download step on-prem
1. Download `JDK 11` from Oracle’s website
2. Download the latest `Community MongoDB Server` instance from the official website
3. Download the `agent` from https://github.com/exense/step/releases/tag/3.18.2

#### Install step on-prem
1. Unzip step archive.
2. Set the path to the JDK’s home
3. Run through the default steps of MongoDB’s installation wizard, using the default port (27001).

#### Run step on-prem
1. Run MongoDB `brew services start mongodb-community@5.0`
2. Run agent `bash startController.command`

#### Starting IDE
1. Install `Intelij IDEA` from https://www.jetbrains.com/ru-ru/idea/download/
2. Instal `Node (version 14.9)`
3. Open folder `cy-step` in IDE
4. Run in terminal in cy-test folder `npm install`
5. Run in terminal in cy-test folder `npm init`
6. Run in terminal in cy-test folder `npm install cypress --save-dev`
7. Run in terminal in cy-test folder `npm i -D cypress-wait-until`
8. Run in terminal in cy-test folder `npm install -D cypress-xpath`
9. Run in terminal in cy-test folder `npm i -D @shelex/cypress-allure-plugin`
10. To execute allure-reporter run `npx cypress run --env allure=true`
11. To examine allure-results run `allure serve /path/to/folder/allure-results`
12. To open Cypress run `npx cypress open`