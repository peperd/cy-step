import 'cypress-wait-until'
import 'cypress-xpath' 
import BasePage from "./BasePage"

const basePage = new BasePage()

class Executions{
    click_Executions(){
        return cy.xpath("//a[contains(text(), ' Executions')]").click()
    }

    execution_list_is_Displayed(){
        cy.waitUntil(() => cy.xpath("//a[contains(text(), ' Execution list')]").should("be.visible"))
    }

}

export default Executions