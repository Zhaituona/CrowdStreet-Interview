package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class LogInStepDefinition {

    WebDriver driver;

    @Given("^user is already on login page$")
    public void user_is_already_on_login_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver","C:\\Users\\chromedriver.exe");
        driver= new ChromeDriver();
        driver.get("https://www.cars.com/profile/secure/signup/?continue=%2F");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.findElement(By.xpath("/html/body/div[2]/section/cars-profiles-lsp/cui-tabs/div/ul[1]/li[1]/div")).click();
    }

    @When("^title of login page is Cars$")
    public void title_of_login_page_is_Cars() throws Throwable {
        String title = driver.getTitle();
        Assert.assertEquals("Cars.com | Sign Up",title);
    }

    @Then("^user enter \"(.*)\" and \"(.*)\"$")
    public void user_enter_email_password(String email, String password) throws Throwable {
        driver.findElement(By.xpath("//input[@type='text']")).sendKeys(email);
        driver.findElement(By.xpath("//input[@type='password']")).sendKeys(password);
    }


    @Then("^user click on logIn button$")
    public void user_click_on_logIn_button() throws Throwable {
        driver.findElement(By.xpath("//button[@class='cui-button']")).click();
    }

    @Then("^user is in the home page$")
    public void user_is_in_the_home_page() throws Throwable {
        Thread.sleep(3000);
      boolean b=  driver.findElement(By.xpath("//img[@id='cars-com-logo']")).isDisplayed();
      Assert.assertTrue(b);
    }
    @Then("^browser is close$")
    public void browser_is_close() throws Throwable {
       driver.quit();
}


}
