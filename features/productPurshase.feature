Feature: webview Flow

Scenario:
    Given the user is on the catalog
    When the user tap on a product
    Then the user should be redirected to product details screen

    When the user tap on add to cart button
    Then the product should be added on the user cart

    When the user tap on cart icon
    Then the user should be redirected to the cart screen

    When the user tap on complete purshase
    Then the user should be redirected to Log in screen

    When the user fill Log in fields and confirm
    Then the user will be redirected to checkout screen

    When the user fill personal checkout fields and confirm
    Then the the user should be redirected to the credit card checkout Screen

    When the user fill credit card fields and confirm
    Then the user should be redirected to place order screen and tap on place order