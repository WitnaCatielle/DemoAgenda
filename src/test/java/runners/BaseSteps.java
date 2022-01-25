package runners;

import org.junit.Before;

import page.InserirContatosPage;

public class BaseSteps {
	
	private InserirContatosPage listPage = new InserirContatosPage();
	
	@Before
	public void initialize() {
		listPage.acessarTelaInicial();
	}
	
}