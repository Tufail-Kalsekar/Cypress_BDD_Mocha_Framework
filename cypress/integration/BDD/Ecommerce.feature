Feature: End to End Ecommerce Validations

    App Regression
    #use tags to separate tests and run them for smoke or regression.
    @Regression  
    Scenario: Ecommerce products delivery
    Given I open ECommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thankyou

    
    @Smoke
    Scenario: Filling the form to shop
    Given I open ECommerce Page
    When I fill the form details
    |name | gender |
    |bobz | Male   |
    #parameterize the tests by adding data like above example, it will be stored in a matrix, 
    #we can later be referenced in stepDefinations.    
    Then validate the forms behaviour
    And select the Shop Page