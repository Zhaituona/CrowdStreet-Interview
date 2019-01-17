package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features={"C:\\Users\\Elzat\\IdeaProjects\\CarsBDD\\Cars\\src\\main\\java\\features\\Login.feature"},
        glue = {"stepDefinition"},
        format = {"pretty","json:report/cucumber.json","html:report/cucumber-pretty"}
)


public class TestRunner {
}
