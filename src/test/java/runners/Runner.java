package runners;

import static runners.DriverFactory.killDriver;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.CucumberOptions.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/inserir_contatos.feature",
		glue = "steps",
		tags = {},
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		monochrome = true,
		snippets = SnippetType.CAMELCASE,
		dryRun = false, // true verifica os cenários, se está faltando mapear algum passo
		strict = false
		)
public class Runner {
	
	@AfterClass
	public static void fechar() {
		killDriver();
	}
}
