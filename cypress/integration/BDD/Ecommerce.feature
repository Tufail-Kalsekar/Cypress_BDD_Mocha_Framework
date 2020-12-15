Feature: End to End Ecommerce Validations

    App Regression

    Scenario: Ecomm product delivery
    Given I open Ecomm Page 
    When I add products to cart
    And Validate the prices
    Then Orde is created