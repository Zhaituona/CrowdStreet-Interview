package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

public class CrasForSalePageDefinition {

       WebDriver driver;
    @Given("^user is already on cars for sale page$")
    public void user_is_already_on_cars_for_sale_page() throws Throwable {
        System.setProperty("webdriver.chrome.driver","C:\\Users\\chromedriver.exe");
        driver= new ChromeDriver();
        driver.get("https://www.cars.com/profile/secure/signup/?continue=%2F");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.findElement(By.xpath("/html/body/div[2]/section/cars-profiles-lsp/cui-tabs/div/ul[1]/li[1]/div")).click();
        driver.findElement(By.xpath("//input[@type='text']")).sendKeys("zaytuna128@gmail.com");
        driver.findElement(By.xpath("//input[@type='password']")).sendKeys("zana195726");
        driver.findElement(By.xpath("//button[@class='cui-button']")).click();
        WebElement moves = (driver.findElement(By.linkText("Cars for Sale")));
        Actions act = new Actions(driver);
        act.moveToElement(moves).build().perform();
        moves.click();


    }

    @When("^title of cars for sale page appearance$")
    public void title_of_cars_for_sale_page_appearance() throws Throwable {
        boolean b = driver.findElement(By.cssSelector(".global-nav__logo")).isDisplayed();
        Assert.assertTrue(b);
    }

    @Then("^user select new cars from UserCars drop down$")
    public void user_select_new_cars_from_UserCars_drop_down() throws Throwable {
        Select s = new Select(driver.findElement(By.xpath("//*[@ng-model='selectedStockType']")));
        s.selectByValue("new");
    }

    @Then("^user select acura from allMakes drop down$")
    public void user_select_acura_from_allMakes_drop_down() throws Throwable {
     Select s = new Select(driver.findElement(By.xpath("//*[@ng-model='selectedMake']")));
     s.selectByIndex(1);
    }

    @Then("^user select cl from allModels drop dwon$")
    public void user_select_cl_from_allModels_drop_dwon() throws Throwable {
        Select s = new Select(driver.findElement(By.xpath("//*[@ng-model='selectedModel']")));
        s.selectByValue("47843");
    }

    @Then("^user select (\\d+) from price drop down$")
    public void user_select_from_price_drop_down(int arg1) throws Throwable {
        Select s = new Select(driver.findElement(By.xpath("//*[@ng-model='selectedPrice']")));
        s.selectByValue("8000");
    }

    @Then("^user select (\\d+)miles radius drop down$")
    public void user_select_miles_radius_drop_down(int arg1) throws Throwable {
        Select s = new Select(driver.findElement(By.xpath("//*[@ng-model='selectedDist']")));
        s.selectByValue("10");
    }

    @Then("^user click search button$")
    public void user_click_search_button() throws Throwable {
        driver.findElement(By.id("search-widget-submit")).click();
    }

    @Then("^user navigate to search result$")
    public void user_navigate_to_search_result() throws Throwable {
     boolean b= driver.findElement(By.xpath("//label[@data-linkname='gn-new-search-select']")).isDisplayed();
     Assert.assertTrue(b);
    }

}
