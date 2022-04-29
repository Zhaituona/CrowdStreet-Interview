$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Crowdstreet login Feature",
  "description": "",
  "id": "crowdstreet-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Crowdstreet create account Test Scenario",
  "description": "",
  "id": "crowdstreet-login-feature;crowdstreet-create-account-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user click on CREATE AN ACOOUNT button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is crowdstreet",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cpassword\u003e\" and \"\u003cconfirmedpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on Yes button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on create an account button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "crowdstreet-login-feature;crowdstreet-create-account-test-scenario;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "password",
        "confirmedpassword"
      ],
      "line": 14,
      "id": "crowdstreet-login-feature;crowdstreet-create-account-test-scenario;;1"
    },
    {
      "cells": [
        "zaytuna",
        "murat",
        "zaytuna128@gmail.com",
        "ELZAT180616@",
        "ELZAT180616@"
      ],
      "line": 15,
      "id": "crowdstreet-login-feature;crowdstreet-create-account-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Crowdstreet create account Test Scenario",
  "description": "",
  "id": "crowdstreet-login-feature;crowdstreet-create-account-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user click on CREATE AN ACOOUNT button",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is crowdstreet",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enter \"zaytuna\" and \"murat\" and \"zaytuna128@gmail.com\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enter \"ELZAT180616@\" and \"ELZAT180616@\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user click on Yes button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user click on create an account button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "browser is close",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInStepDefinition.user_click_on_CREATE_AN_ACOOUNT_button()"
});
formatter.result({
  "duration": 23442019601,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.title_of_login_page_is_crowdstreet()"
});
formatter.result({
  "duration": 15471395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zaytuna",
      "offset": 12
    },
    {
      "val": "murat",
      "offset": 26
    },
    {
      "val": "zaytuna128@gmail.com",
      "offset": 38
    }
  ],
  "location": "LogInStepDefinition.user_enter_firstname_lastname_email(String,String,String)"
});
formatter.result({
  "duration": 2559410916,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ELZAT180616@",
      "offset": 12
    },
    {
      "val": "ELZAT180616@",
      "offset": 31
    }
  ],
  "location": "LogInStepDefinition.user_enter_password_and_confirmedpassword(String,String)"
});
formatter.result({
  "duration": 882684142,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_click_on_Yes_button()"
});
formatter.result({
  "duration": 104891967,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_click_on_checkbox()"
});
formatter.result({
  "duration": 216198150,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.user_click_on_create_an_account_button()"
});
formatter.result({
  "duration": 71049426,
  "status": "passed"
});
formatter.match({
  "location": "LogInStepDefinition.browser_is_close()"
});
formatter.result({
  "duration": 1881024094,
  "status": "passed"
});
});