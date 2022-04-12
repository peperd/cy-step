import Login from "../../pages/Login"
import Plans from "../../pages/PlansPage"
import Keywords from "../../pages/KeywordsPage"
import Parameters from "../../pages/ParametersPage"
import Executions from "../../pages/ExecutionsPage"
import Scheduler from "../../pages/SchedulerPage"
import '@shelex/cypress-allure-plugin';


const login = new Login()
const plans = new Plans()
const keywords = new Keywords()
const parameters = new Parameters()
const executions = new Executions()
const scheduler = new Scheduler()


describe('Test suite for Step', () => {
  beforeEach(() => {
    login.login_to_website()    
  })


  it("Verify login to website", () => {
    plans.new_plan_is_displayed()
    })

  it("Verify Keywords page", () => {
    keywords.click_Keywords()
    keywords.new_keyword_is_Displayed()
  })

  it("Verify Parameters page", () => {
    parameters.click_Parameters()
    parameters.new_parameter_is_Displayed()
  })

  it("Verify Executions page", () => {
    executions.click_Executions()
    executions.execution_list_is_Displayed()
  })

  it("Verify Scheduler page", () => {
    scheduler.click_Scheduler()
    scheduler.new_task_is_Displayed()
  })
  })

