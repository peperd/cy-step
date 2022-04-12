import 'cypress-wait-until'
import 'cypress-xpath' 
import BasePage from "./BasePage"

const basePage = new BasePage()



class Parameters{
    click_Parameters(){
        return cy.xpath("//a[contains(text(), ' Parameters')]").click()
    }

    new_parameter_is_Displayed(){
        cy.waitUntil(() => basePage.successButton().should("be.visible"))
    }

}

export default Parameters