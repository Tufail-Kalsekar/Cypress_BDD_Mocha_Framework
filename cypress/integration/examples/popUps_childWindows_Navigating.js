/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        
        // Cypress will automatically handle pop-ups but if you want to include assertions do it the following way
        // window:alert will trigger window events of type alert.
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // window:confirm will trigger window events of type alert.
        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        //this step is used to remove the 'target' attribute from the given element to open page on the same window.
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        //this will verify the current url 
        cy.url().should('include', 'rahulshetty')

        //this will navigate back.
        cy.go('back')
    })
})