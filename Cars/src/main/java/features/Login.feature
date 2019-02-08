Feature:Cars login Feature
Scenario Outline:Cras login Test Scenario

Given user is already on login page
When title of login page is Cars
Then user enter "<email>" and "<password>"
Then user click on logIn button
Then user is in the home page
Then browser is close

Examples:
  |email                | password|
  |zaytuna128@gmail.com |zana195726|