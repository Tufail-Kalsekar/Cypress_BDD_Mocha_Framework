/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'
describe('My Second Test Suite', function () {

    before(function () {
        // runs once before all tests in the block
        cy.fixture('example').then(function (data) {
            this.data = data
        })
    })

    it('My FirstTest case', function () {

        const homePage = new HomePage()         //need to intialize the object for the pageObject classes 
        const productPage = new ProductPage()   //more importantly make sure path to pageObject files is correct.
        cy.visit(Cypress.env('url') + "/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEntrepreneaur().should('be.disabled')
        Cypress.config('defaultCommandTimeout', 8000)
        homePage.getShopTab().click()


        //this is how you repition for different sets of input data, for a specific step in the test.
        //For better understanding, refer example.json in fixtures folder and refer the 'productName'.
        this.data.productName.forEach(function (element) {

            cy.selectProduct(element)
        });
        productPage.checkOutButton().click()
        var sum = 0

        //the following steps iterate over the items in the cart and add the amounts.
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text() 
            var res = amount.split(" ")
            res = res[1].trim()             //delete any possible blank spaces in the amount stored as a string.
            sum = Number(sum) + Number(res) //extracted value is in string, use this step to convert a string to a number.

        }).then(function () {
            cy.log(sum)
        })
        cy.get('h3 strong').then(function (element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)

        })

        //this part of the script needs to be implemented under pageObject model. 
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
        //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function (element) {
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
    })
})