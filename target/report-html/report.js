$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/inserir_contatos.feature");
formatter.feature({
  "name": "Cadastro de contatos",
  "description": "Como um usuário\nGostaria de cadastrar contatos\nPara que fique cadastrado",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Deve cadastrar um contato com sucesso",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContatosSteps.queAcessoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Witna Sales\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.informoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o telefone \"81 9999-9999\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.oTelefone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar Contato",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionarContato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o contato é salvo com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContatosSteps.oContatoÉSalvoComSucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve cadastrar um contato com nome já existente",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContatosSteps.queAcessoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome \"Witna Sales\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.informoONome(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o telefone \"81 9999-9999\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.oTelefone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar Contato",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionarContato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sou notificado que já existe um contato com esse nome",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContatosSteps.souNotificadoQueJáExisteUmContatoComEsseNome()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Não deve cadastrar um contato com telefone contendo mais que 12 caracteres",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContatosSteps.queAcessoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome Teste \"Teste\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.informoONomeTeste(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o telefone Teste \"81 9999999999999999\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.oTelefoneTeste(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar Contato",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionarContato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sou notificado que o telefone deve conter no máximo 12 caracteres",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContatosSteps.souNotificadoQueOTelefoneDeveConterNoMáximoCaracteres(Integer)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Telefone (máx. 12 caracter).\u0027]\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MSDGTIC0025\u0027, ip: \u0027192.168.20.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\WITNA~1.SAL\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:64898}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e50f89c9d57afd6736fde388a526640a\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Telefone (máx. 12 caracter).\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat runners.BasePage.getText(BasePage.java:26)\r\n\tat page.InserirContatosPage.getMsgErrorTelMaxCaracter(InserirContatosPage.java:56)\r\n\tat steps.InserirContatosSteps.souNotificadoQueOTelefoneDeveConterNoMáximoCaracteres(InserirContatosSteps.java:62)\r\n\tat ✽.sou notificado que o telefone deve conter no máximo 12 caracteres(file:src/test/resources/features/inserir_contatos.feature:30)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Deve cadastrar um contato com nome com no minimo 3 caracteres",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContatosSteps.queAcessoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome T \"T\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.informoONomeT(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o telefone \"81 9999-9999\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.oTelefone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar Contato",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionarContato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sou notificado que o nome deve conter no mínimo 3 caracteres",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContatosSteps.souNotificadoQueONomeDeveConterNoMínimoCaracteres(Integer)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027Nome (min. 3 caracter).\u0027]\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MSDGTIC0025\u0027, ip: \u0027192.168.20.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\WITNA~1.SAL\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:64898}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e50f89c9d57afd6736fde388a526640a\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027Nome (min. 3 caracter).\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat runners.BasePage.getText(BasePage.java:26)\r\n\tat page.InserirContatosPage.getMsgErrorNomeMinCaracter(InserirContatosPage.java:60)\r\n\tat steps.InserirContatosSteps.souNotificadoQueONomeDeveConterNoMínimoCaracteres(InserirContatosSteps.java:72)\r\n\tat ✽.sou notificado que o nome deve conter no mínimo 3 caracteres(file:src/test/resources/features/inserir_contatos.feature:38)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Validar campo telefone aceitando no mínino 8 caracteres",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContatosSteps.queAcessoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informo o nome Teste de Contato \"Teste de contato\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.informoONomeTesteDeContato(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o telefone Teste de Contato \"81\"",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.oTelefoneTesteDeContato(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Adicionar Contato",
  "keyword": "E "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoAdicionarContato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sou notificado que o telefone deve conter no mínimo 8 caracteres",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContatosSteps.souNotificadoQueOTelefoneDeveConterNoMínimoCaracteres(Integer)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[.\u003d\u0027telefone (min. 8 caracter).\u0027]\"}\n  (Session info: chrome\u003d97.0.4692.71)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MSDGTIC0025\u0027, ip: \u0027192.168.20.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.71, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\WITNA~1.SAL\\AppDat...}, goog:chromeOptions: {debuggerAddress: localhost:64898}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e50f89c9d57afd6736fde388a526640a\n*** Element info: {Using\u003dxpath, value\u003d//span[.\u003d\u0027telefone (min. 8 caracter).\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat runners.BasePage.getText(BasePage.java:26)\r\n\tat page.InserirContatosPage.getMsgErrorTelMinCaracter(InserirContatosPage.java:64)\r\n\tat steps.InserirContatosSteps.souNotificadoQueOTelefoneDeveConterNoMínimoCaracteres(InserirContatosSteps.java:87)\r\n\tat ✽.sou notificado que o telefone deve conter no mínimo 8 caracteres(file:src/test/resources/features/inserir_contatos.feature:46)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Deve listar contatos com sucesso",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContatosSteps.queAcessoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adiciono um contato válido",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContatosSteps.adicionoUmContatoVálido()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "visualizo a página de listagem dos contatos",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContatosSteps.visualizoAPáginaDeListagemDosContatos()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Deve remover um contato com sucesso",
  "description": "",
  "keyword": "Cenário"
});
formatter.step({
  "name": "que acesso a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "InserirContatosSteps.queAcessoAAplicação()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seleciono Apagar",
  "keyword": "Quando "
});
formatter.match({
  "location": "InserirContatosSteps.selecionoApagar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o contato é excluído com sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "InserirContatosSteps.oContatoÉExcluídoComSucesso()"
});
formatter.result({
  "status": "passed"
});
});