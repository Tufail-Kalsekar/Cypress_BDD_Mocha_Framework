/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('My Second Test Suite', function () {

    it('My FirstTest case', function () {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    //this step gives the cy object knowledge of the frame on the webpage
    cy.frameLoaded('#courses-iframe')
    
    //every action on the frame needs .iframe() method in beginning
    cy.iframe().find("ul[class*='navigation'] a[href*='mentor']").eq(0).click()
    cy.iframe().find("h1[class*='pricing']").eq(0).then(function (mentorship_name) 
        {
        var mentorship = mentorship_name.text()
        expect(mentorship).to.equal('BRONZE')
        })
    })
})