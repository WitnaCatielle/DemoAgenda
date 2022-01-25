package runners;

import static runners.DriverFactory.getDriver;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class BasePage {
	
    public void buttonClick(String xpath) {
    	getDriver().findElement(By.xpath(xpath)).click();
    }    
         
    public void setInput(By by, String text) {
        getDriver().findElement(by).clear();
        getDriver().findElement(by).sendKeys(text);
    }

    public void setInput(String xpath, String text) {
        setInput(By.xpath(xpath), text);
    }
    
    public String getText(String xpath) {
    	return getDriver().findElement(By.xpath(xpath)).getText();
    }
    
    public String getTextFild(By by) {
        return getDriver().findElement(by).getAttribute("value");
    }

    public String getTextFild(String xpath) {
        return getTextFild(By.xpath(xpath));
    }
    
    
/***** Tabela *******/
	
	public WebElement getCelula(String colunaBusca, String valor, String colunaBotao, String classTabela) {
		//procurar coluna do registro
		WebElement tabela = getDriver().findElement(By.xpath("//table"));
		/*realizar a busca atraves da lista de WebElement, usando findElement que vai buscar atraves do primeiro elemento
		 *  ja o findElements usando neste caso para buscar a partir de uma lista de elementos listados na coluna da tabela */
		int xpathColuna = getIndiceColuna(colunaBusca, tabela);
		
		//encontrar a linha do registro
		int xpathLinha = getIndiceLinha(valor, tabela, xpathColuna);
		
		//procurar coluna do botão
		int xpathColunaBotao = getIndiceColuna(colunaBotao, tabela);
		
		//clicar no botao da celula encontrada
		WebElement celula = tabela.findElement(By.xpath(".//tr[2]/td[2]"));
		return celula;
		
	}
		
	public void clicarBotaoTabela(String colunaBusca, String valor, String colunaBotao, String classTabela) {
		WebElement celula = getCelula(colunaBusca, valor, colunaBotao, classTabela);
		celula.findElement(By.xpath(".//input")).click();
	}

	protected int getIndiceLinha(String valor, WebElement tabela, int xpathColuna) {
		List<WebElement> linhas = tabela.findElements(By.xpath("./tbody/tr/td["+xpathColuna+"]"));
		int xpathLinha = -1;
		for(int i = 0; i < linhas.size(); i++) {
			if(linhas.get(i).getText().equals(valor)) {
				xpathLinha = i+1;
				break;
			}
		}
		return xpathLinha;
	}

	protected int getIndiceColuna(String coluna, WebElement tabela) {
		List<WebElement> colunas = tabela.findElements(By.xpath(".//th"));
		int xpathColuna = -1;
		for(int i = 0; i < colunas.size(); i++) {
			if(colunas.get(i).getText().equals(coluna)) {
				xpathColuna = i+1;
				break;
			}
		}
		return xpathColuna;
	}
}
