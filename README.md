# DemoAgenda

# Atividade de Automação Prova Instituto Atlântico
## Projeto Automação Demo Agenda

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Test end 2 end na página
- Página de cadastro 


## Tecnologia e Organização do Projeto

A Automação foi desenvolvida em Java (Maven) utilizando o Selenium WebDriver junto com o framework JUNIT e Cucumber.
O projeto foi dividido em alguns Packages:

- Runner: Encontra-se toda a configuração e classes bases do projeto.
- Page: Encontram-se todas as chamadas dos métodos da Classe BasePage. O Page é onde está o mapeamento de cada página.
- Steps: Encontram-se as classes de Testes.

O arquivo das Features encontra-se na Pasta src/test/resources/features.

Na Classe BasePage estão os métodos comuns para todas as páginas.
Na Classe DriveFactory está a chamada do driver.
Fiz o mapeamento dos drives do Chrome e Firefox, e por default a chamada está sendo para o Chrome. Caso necessário ultilizar o Firefox, deve-se descomentar a linha:

```sh
// System.setProperty("webdriver.gecko.driver", "target\\drives\\geckodriver.exe");
// driver = new FirefoxDriver();
```

Os drivers encontram-se na Pasta target/drivers dentro do projeto.

Para executar o Projeto, utilizar a IDE Eclipse ou Intellij, fazendo o import do projeto Maven.
