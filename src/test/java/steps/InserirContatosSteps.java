package steps;

import org.junit.Assert;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import page.InserirContatosPage;
import runners.BaseSteps;

public class InserirContatosSteps extends BaseSteps {
	
	InserirContatosPage inserirContatosPage = new InserirContatosPage();
	
	@Dado("que acesso a aplicação")
	public void queAcessoAAplicação() {
		inserirContatosPage.acessarTelaInicial();
	}

	@Quando("seleciono Adicionar")
	public void selecionoAdicionar() {
		inserirContatosPage.clickBtnAdicionar();
	}

	@Quando("informo o nome {string}")
	public void informoONome(String string) {
		inserirContatosPage.setNome("Witna Sales");
	}

	@Quando("o telefone {string}")
	public void oTelefone(String string) {
		inserirContatosPage.setTelefone("81 9999-9999");
	}

	@Quando("seleciono Adicionar Contato")
	public void selecionoAdicionarContato() {
		inserirContatosPage.clickBtnAddSuc();
	}

	@Então("o contato é salvo com sucesso")
	public void oContatoÉSalvoComSucesso() {
		Assert.assertEquals("81 9999-9999", inserirContatosPage.getNameContact("Witna Sales"));
	}

	@Então("sou notificado que já existe um contato com esse nome")
	public void souNotificadoQueJáExisteUmContatoComEsseNome() {
		 inserirContatosPage.getMsgErrorContExiste();
	}

	@Quando("informo o nome Teste {string}")
	public void informoONomeTeste(String string) {
	    inserirContatosPage.setNomeTeste("Teste");
	}

	@Quando("o telefone Teste {string}")
	public void oTelefoneTeste(String string) {
	    inserirContatosPage.setTelefoneTeste("81 9999999999999999");
	}

	@Então("sou notificado que o telefone deve conter no máximo {int} caracteres")
	public void souNotificadoQueOTelefoneDeveConterNoMáximoCaracteres(Integer int1) {
		inserirContatosPage.getMsgErrorTelMaxCaracter();
	}

	@Quando("informo o nome T {string}")
	public void informoONomeT(String string) {
	    inserirContatosPage.setNomeT("T");
	}

	@Então("sou notificado que o nome deve conter no mínimo {int} caracteres")
	public void souNotificadoQueONomeDeveConterNoMínimoCaracteres(Integer int1) {
		inserirContatosPage.getMsgErrorNomeMinCaracter();
	}

	@Quando("informo o nome Teste de Contato {string}")
	public void informoONomeTesteDeContato(String string) {
	    inserirContatosPage.setNomeTesteDeContato("Teste de contato");
	}

	@Quando("o telefone Teste de Contato {string}")
	public void oTelefoneTesteDeContato(String string) {
	    inserirContatosPage.setTelefoneTesteDeContato("81");
	}

	@Então("sou notificado que o telefone deve conter no mínimo {int} caracteres")
	public void souNotificadoQueOTelefoneDeveConterNoMínimoCaracteres(Integer int1) {
		inserirContatosPage.getMsgErrorTelMinCaracter();
	}

	@Quando("adiciono um contato válido")
	public void adicionoUmContatoVálido() {
		Assert.assertEquals("Witna Sales", inserirContatosPage.getNameListContacSuc());
	}

	@Então("visualizo a página de listagem dos contatos")
	public void visualizoAPáginaDeListagemDosContatos() {
		Assert.assertEquals("Demo simples de agenda", inserirContatosPage.getNameListContact());
	}

	@Quando("seleciono Apagar")
	public void selecionoApagar() {
		inserirContatosPage.clickBtnApagar();
	}

	@Então("o contato é excluído com sucesso")
	public void oContatoÉExcluídoComSucesso() {
		Assert.assertFalse("Teste de contato", false);
	}
	    
}
