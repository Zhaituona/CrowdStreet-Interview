Feature:Crowdstreet login Feature
Scenario Outline:Crowdstreet create account Test Scenario

Given user click on CREATE AN ACOOUNT button
When title of login page is crowdstreet
Then user enter "<firstname>" and "<lastname>" and "<email>"
Then user enter "<password>" and "<confirmedpassword>"
Then user click on Yes button
Then user click on checkbox
Then user click on create an account button
Then browser is close

Examples:
  |firstname | lastname  | email              | password   | confirmedpassword |
  |zaytuna   | murat     |zaytuna128@gmail.com|ELZAT180616@|ELZAT180616@|