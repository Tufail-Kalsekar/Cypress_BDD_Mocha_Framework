/// <reference types="Cypress" />

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            //this will assign text on element to variable 'text'
            const text = $e1.text()
            if (text.includes("Python")) {

                //this step will need promise resolution because .text cannot be applied
                //directly on .next() as .text() is jQuery method, we wiil have to resolve the promise.
                //the below webElement will be resolved and assigned to 'price' webElement. 
                cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('26')
                })
            }
        })
    })
})