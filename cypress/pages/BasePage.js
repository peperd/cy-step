const data = require("../fixtures/credentials.json")



class BasePage{
    url(){
    return cy.visit(data.base_url)
    }

    username(){
        return cy.get('[name="username"]')
    }

    password (){
        return  cy.get('[name="password"]')
    }

    submit() {
        return cy.get('[type="submit"]')
    }

    successButton(){
        return cy.get(".btn-success")
    }

    }

export default BasePage