package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features={"C:\\Users\\Elzat\\IdeaProjects\\CarsBDD\\Cars\\src\\main\\java\\features"},
        glue = {"stepDefinition"},
        format = {"pretty","json:report/cucumber.json","html:report/cucumber-pretty"},
        monochrome = true,
        strict = true,
        dryRun =false

)
public class TestRunner {

}
