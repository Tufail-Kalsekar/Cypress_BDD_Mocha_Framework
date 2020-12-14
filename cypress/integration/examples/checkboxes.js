/// <reference types="Cypress" />

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {
        //navigate
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        //this step will get the element, perform a click, perform assertion to see if its checked, and also verify its value attribute
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        //this will check all the checkboxes having value as 'option2' and 'option3'
        cy.get("[type='checkbox']").check(['option2', 'option3'])
        
       })
    })