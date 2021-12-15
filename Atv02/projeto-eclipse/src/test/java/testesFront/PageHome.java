package testesFront;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PageHome {
	private WebDriver driver;
	@Before
	public void inicializarTestes() {
		System.setProperty("webdriver.chrome.driver", 
				System.getenv("Driver"));
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.get("http://localhost:4200");
		driver.manage().window().maximize();
	}
	@Test
	public void testeInterface() {
		driver.findElement(By.className("btn-page-user")).click();
		WebElement btncadastrar = new WebDriverWait(driver, 10)
				.until(ExpectedConditions.elementToBeClickable(By.id("cadastrar")));
		btncadastrar.click();
		
		driver.findElement(By.id("btnfechar")).click();
		
		WebElement emlInput = new WebDriverWait(driver, 10)
				.until(ExpectedConditions.elementToBeClickable(By.id("mat-input-0")));
		emlInput.sendKeys("email@email.com.br");

		driver.findElement(By.id("mat-input-1")).sendKeys("123.456.789-00");
		driver.findElement(By.id("mat-input-2")).sendKeys("Nome e Sobrenome");
		driver.findElement(By.id("mat-input-3")).sendKeys("01/01/2010");
		driver.findElement(By.id("mat-input-4")).sendKeys("(14) 2222-2222");
		WebElement btncadastro = driver.findElement(By.cssSelector("button#cadastrar.btn.btn-cadastrar"));
		WebElement btntodoscadastro = driver.findElement(By.cssSelector("button#todoscadastros.btn.btn-cadastrar"));
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		btncadastro.click();
		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		btntodoscadastro.click();
	}
	@After
	public void finalizandoTestes() {
		//driver.quit();
	}
	
}
