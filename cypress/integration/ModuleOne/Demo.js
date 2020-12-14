/// <reference types="Cypress"/>

describe('My First Test', function () {

  it('Does not do much!', function () {
    cy.visit("www.google.com") //used to navigate to pages 
    // 1. store test data in fixtures folder.
    // 2. write methods to handle cypress events, exceptions or custom actions, like listeners class in Selenium Java.
    // 3. enter any custom configurations in cypress.json
    // 4. dependencies are in package.json
    // 5. custom re-usable methods are in support/commands.js
  })

})