Feature: Login verification

Scenario: Valid login
Given user navigates to url 'http://automationexercise.com'
Then user verifies that home page is visible successfully
When user clicks on 'Signup / Login' button
Then user verifies 'Login to your account' is visible
When user enters correct email address "testuser@domain.com" and password "test123"
And user clicks on 'login' button
Then user verifies "Logged in as username" is visible