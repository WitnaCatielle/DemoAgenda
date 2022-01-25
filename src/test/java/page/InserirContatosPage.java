package page;

import static runners.DriverFactory.getDriver;

import runners.BasePage;

public class InserirContatosPage extends BasePage {
	
	
	public void acessarTelaInicial() {
		getDriver().get("http://localhost:8080/");
	}
	
	public void clickBtnAdicionar() {
		buttonClick("//button[.='Adicionar']");
	}
	

	public void setNome(String text) {
		setInput("//div[2]/input", text);
	}
	
	public void setTelefone(String text) {
		setInput("//div[3]/input", text);
	}
	
	public void setNomeTeste(String text) {
		setInput("//div[2]/input", text);
	}
	
	public void setTelefoneTeste(String text) {
		setInput("//div[3]/input", text);
	}
	
	public void setNomeT(String text) {
		setInput("//div[2]/input", text);
	}
	
	public void setNomeTesteDeContato(String text) {
		setInput("//div[2]/input", text);
	}
	
	public void setTelefoneTesteDeContato(String text) {
		setInput("//div[3]/input", text);
	}

	public void clickBtnAddSuc() {
		buttonClick("//button[@class='btn btn-primary']");
	}	
	
	public void getMsgErrorContExiste() {
		getText("//span[.='Pessoa já existe.']");
	}
	
	public void getMsgErrorTelMaxCaracter() {
		getText("//span[.='Telefone (máx. 12 caracter).']");
	}
	
	public void getMsgErrorNomeMinCaracter() {
		getText("//span[.='Nome (min. 3 caracter).']");
	}
	
	public void getMsgErrorTelMinCaracter() {
		getText("//span[.='telefone (min. 8 caracter).']");
	}
	
	public String getNameContact(String name) {
		return getCelula("Nome", name, "Telefone", "//table").getText();
	}
	
	public String getNameListContacSuc() {
		return getText("//tr[3]/td[1]");
	}
	
	public String getNameListContact() {
		return getText("//h1");
	}
	
	public void clickBtnApagar() {
		buttonClick("//tr[2]/td[3]");
	}

	public boolean getNameListContDelete() {
		getText("//table/tbody/tr");
		return false;
	}
}
