/// <reference types="Cypress"/>

describe('My First Test', function () {
    it('First Sample Test', function () {
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") //used to navigate to pages 
      
      // .get is used to find objects, .type is used to enter strings in it. 
      cy.get('input[type="search"]').type("be") 
  
      // adding wait because there is no loading screen for 
      cy.wait(4000)
      
      cy.get('div[class="products"] > div[class="product"]').each(($el, index, $list) => {
        var textVeggies = $el.find('.product-name').text() //this stores the text of the product tile in a variable

        if (textVeggies.includes("Beans"))
        {
            $el.find('button').trigger("click")    
        } 
      })
    })
})
