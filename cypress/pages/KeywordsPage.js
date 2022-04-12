import 'cypress-wait-until'
import 'cypress-xpath' 

class Keywords {
    click_Keywords(){
        return cy.xpath("//a[contains(text(), ' Keywords')]").click()
    }

    new_keyword_is_Displayed(){
        cy.waitUntil(() => basePage.successButton().should("be.visible"))
    }

}

export default Keywords