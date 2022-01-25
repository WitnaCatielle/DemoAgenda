#language: pt
Funcionalidade: Cadastro de contatos

Como um usuário
Gostaria de cadastrar contatos
Para que fique cadastrado

Cenário: Deve cadastrar um contato com sucesso
Dado que acesso a aplicação
Quando seleciono Adicionar
E informo o nome "Witna Sales"
E o telefone "81 9999-9999"
E seleciono Adicionar Contato
Então o contato é salvo com sucesso

Cenário: Não deve cadastrar um contato com nome já existente
Dado que acesso a aplicação
Quando seleciono Adicionar
E informo o nome "Witna Sales"
E o telefone "81 9999-9999"
E seleciono Adicionar Contato
Então sou notificado que já existe um contato com esse nome

Cenário: Não deve cadastrar um contato com telefone contendo mais que 12 caracteres
Dado que acesso a aplicação
Quando seleciono Adicionar
E informo o nome Teste "Teste"
E o telefone Teste "81 9999999999999999"
E seleciono Adicionar Contato
Então sou notificado que o telefone deve conter no máximo 12 caracteres

Cenário: Deve cadastrar um contato com nome com no minimo 3 caracteres
Dado que acesso a aplicação
Quando seleciono Adicionar
E informo o nome T "T"
E o telefone "81 9999-9999"
E seleciono Adicionar Contato
Então sou notificado que o nome deve conter no mínimo 3 caracteres

Cenário: Validar campo telefone aceitando no mínino 8 caracteres
Dado que acesso a aplicação
Quando seleciono Adicionar
E informo o nome Teste de Contato "Teste de contato"
E o telefone Teste de Contato "81"
E seleciono Adicionar Contato
Então sou notificado que o telefone deve conter no mínimo 8 caracteres

Cenário: Deve listar contatos com sucesso
Dado que acesso a aplicação
Quando adiciono um contato válido
Então visualizo a página de listagem dos contatos

Cenário: Deve remover um contato com sucesso
Dado que acesso a aplicação
Quando seleciono Apagar
Então o contato é excluído com sucesso
