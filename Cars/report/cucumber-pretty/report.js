$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Elzat/IdeaProjects/CarsBDD/Cars/src/main/java/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Cars login Feature",
  "description": "",
  "id": "cars-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Cras login Test Scenario",
  "description": "",
  "id": "cars-login-feature;cras-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "user enter \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on logIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "cars-login-feature;cras-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 12,
      "id": "cars-login-feature;cras-login-test-scenario;;1"
    },
    {
      "cells": [
        "zaytuna128@gmail.com",
        "zana195726"
      ],
      "line": 13,
      "id": "cars-login-feature;cras-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Cras login Test Scenario",
  "description": "",
  "id": "cars-login-feature;cras-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "name": "user enter \"zaytuna128@gmail.com\" and \"zana195726\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user click on logIn button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 47144465102,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.title_of_login_page_is_Cars()"
});
formatter.result({
  "duration": 25029156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zaytuna128@gmail.com",
      "offset": 12
    },
    {
      "val": "zana195726",
      "offset": 39
    }
  ],
  "location": "LogInStepDefinition.user_enter_email_password(String,String)"
});
formatter.result({
  "duration": 538200524,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_click_on_logIn_button()"
});
formatter.result({
  "duration": 113453126,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 10232706554,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 3224356523,
  "status": "passed"
});
});