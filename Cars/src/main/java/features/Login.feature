Feature:Cars login Feature
Scenario:Cras login Test Scenario

Given user is already on login page
When title of login page is Cars
Then user enter email
Then user enter password
Then user click on logIn button
Then user is in the home page
Then browser is close

Scenario:Cars for sale page Test Scenario
Given user is already on cars for sale page
When title of cars for sale page appearance
Then user select new cars from UserCars drop down
Then user select acura from allMakes drop down
Then user select cl from allModels drop dwon
Then user select 8000 from price drop down
Then user select 10miles radius drop down
Then user click search button
Then user navigate to search result