import 'cypress-wait-until'
import 'cypress-xpath' 
import BasePage from "./BasePage"

const basePage = new BasePage()



class Plans{
new_plan_is_displayed(){
    cy.waitUntil(() => basePage.successButton().should("be.visible"))
}
}

export default Plans