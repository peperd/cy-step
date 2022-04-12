import BasePage from "./BasePage";
const data = require("../fixtures/credentials.json")

const basePage = new BasePage()

class Login{
    login_to_website(){
        basePage.url()
        basePage.username().clear().type(data.login)
        basePage.password().clear().type(data.password)
        basePage.submit().click()
    }
}

export default Login