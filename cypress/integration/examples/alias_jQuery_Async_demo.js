/// <reference types="Cypress" />

//should ideally be used with hooks, however, this file has only one test.
cy.fixture('example').then(function (data) {
    this.data = data
})

describe('My First Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit(this.data.url)
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser, cypress get acts like findElement of selenium
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining

        //refer below declaration to assign web element to a variable
        cy.get('.products').as('productLocator')

        //later refer variable using "@"
        cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click()

        //below step shows how to print stuff in the browser console
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function () {
            console.log('sf')
        })

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').trigger("click")
            }
        })

        //Assertions for logo using 'should'
        cy.get('.brand').should('have.text', 'GREENKART')

        //this is to print in logs (in test runnner)
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())

        })
    })
})