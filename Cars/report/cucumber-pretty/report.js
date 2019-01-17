$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Elzat/IdeaProjects/CarsBDD/Cars/src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Cars login Feature",
  "description": "",
  "id": "cars-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Cras login Test Scenario",
  "description": "",
  "id": "cars-login-feature;cras-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Cars",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter email",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on logIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is in the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 14356332951,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.title_of_login_page_is_Cars()"
});
formatter.result({
  "duration": 19069667,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_enter_email()"
});
formatter.result({
  "duration": 430367270,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_enter_password()"
});
formatter.result({
  "duration": 130400258,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_click_on_logIn_button()"
});
formatter.result({
  "duration": 97218167,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 10582345447,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 1518210603,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Cars for sale page Test Scenario",
  "description": "",
  "id": "cars-login-feature;cars-for-sale-page-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "user is already on cars for sale page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title of cars for sale page appearance",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user select new cars from UserCars drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user select acura from allMakes drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user select cl from allModels drop dwon",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user select 8000 from price drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user select 10miles radius drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user click search button",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user navigate to search result",
  "keyword": "Then "
});
formatter.match({
  "location": "CrasForSalePageDefinition.user_is_already_on_cars_for_sale_page()"
});
formatter.result({
  "duration": 21449097183,
  "status": "passed"
});
formatter.match({
  "location": "CrasForSalePageDefinition.title_of_cars_for_sale_page_appearance()"
});
formatter.result({
  "duration": 77075510,
  "status": "passed"
});
formatter.match({
  "location": "CrasForSalePageDefinition.user_select_new_cars_from_UserCars_drop_down()"
});
formatter.result({
  "duration": 292751591,
  "status": "passed"
});
formatter.match({
  "location": "CrasForSalePageDefinition.user_select_acura_from_allMakes_drop_down()"
});
formatter.result({
  "duration": 152417091,
  "status": "passed"
});
formatter.match({
  "location": "CrasForSalePageDefinition.user_select_cl_from_allModels_drop_dwon()"
});
formatter.result({
  "duration": 129638182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8000",
      "offset": 12
    }
  ],
  "location": "CrasForSalePageDefinition.user_select_from_price_drop_down(int)"
});
formatter.result({
  "duration": 20161179183,
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: 8000\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027DESKTOP-90HTSEJ\u0027, ip: \u0027192.168.182.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:209)\r\n\tat stepDefinition.CrasForSalePageDefinition.user_select_from_price_drop_down(CrasForSalePageDefinition.java:65)\r\n\tat ✽.Then user select 8000 from price drop down(C:/Users/Elzat/IdeaProjects/CarsBDD/Cars/src/main/java/features/Login.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 12
    }
  ],
  "location": "CrasForSalePageDefinition.user_select_miles_radius_drop_down(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CrasForSalePageDefinition.user_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CrasForSalePageDefinition.user_navigate_to_search_result()"
});
formatter.result({
  "status": "skipped"
});
});