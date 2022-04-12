import 'cypress-wait-until'
import 'cypress-xpath' 
import BasePage from "./BasePage"

const basePage = new BasePage()


class Scheduler{

    click_Scheduler(){
        return cy.get(".glyphicon.glyphicon-time").click()
    }

    new_task_is_Displayed(){
        cy.waitUntil(() => basePage.successButton().should("be.visible"))
    }

}

export default Scheduler