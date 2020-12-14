/// <reference types="Cypress"/>

describe('My First Test', function () {
  it('First Sample Test', function () {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") //used to navigate to pages 
    
    // .get is used to find objects, .type is used to enter strings in it. 
    cy.get('input[type="search"]').type("be") 

    // adding wait because there is no loading screen for 
    cy.wait(4000)
    // assertions to check if number of elements are 5
    cy.get('div[class="products"] > div[class="product"]').should('have.length',5)
  })
})