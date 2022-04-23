package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class LogInStepDefinition {

    WebDriver driver;



    @Given("^user click on CREATE AN ACOOUNT button$")
    public void user_click_on_CREATE_AN_ACOOUNT_button() throws Throwable {
        System.setProperty("webdriver.chrome.driver","C:\\Users\\chromedriver.exe");
        driver= new ChromeDriver();
        driver.get("https://test.crowdstreet.com/invexp/properties/all");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        WebElement createAnAccount = driver.findElement(By.xpath("//a[contains(text(), 'Create An Account')]"));
        createAnAccount.click();// Write code here that turns the phrase above into concrete actions

    }

    @When("^title of login page is crowdstreet$")
    public void title_of_login_page_is_crowdstreet() throws Throwable {
        String title =driver.getTitle();
        System.out.println("Home page title" +title);
        Assert.assertEquals("Marketplace | CrowdStreet",title);


    }



    @Then("^user enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_firstname_lastname_email(String firstname, String lastname, String email) throws Throwable {
        driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(firstname);
        driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys(lastname);
        driver.findElement(By.xpath("//input[@id='email']")).sendKeys(email);
    }

    @Then("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_password_and_confirmedpassword(String password, String confirmedpassword) throws Throwable {

             driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
             driver.findElement(By.xpath("//input[@id='confirmPassword']")).sendKeys(confirmedpassword);
         }

    @Then("^user click on Yes button$")
    public void user_click_on_Yes_button() throws Throwable {
        driver.findElement(By.xpath("//input[@id='accreditedYes']")).click();
        // Write code here that turns the phrase above into concrete actions

    }

    @Then("^user click on checkbox$")
    public void user_click_on_checkbox() throws Throwable {
       driver.findElement(By.xpath("//input[@id='hasAgreedTos']")).click();

    }


    @Then("^user click on create an account button$")
    public void user_click_on_create_an_account_button() throws Throwable {
        driver.findElement(By.xpath("//span[contains(text(), 'Create an account')]")).click();
        // Write code here that turns the phrase above into concrete actions

    }



    @Then("^browser is close$")
    public void browser_is_close() throws Throwable {

         driver.quit();
   }


















}



