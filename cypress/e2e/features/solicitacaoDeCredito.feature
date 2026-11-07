#language: pt

Funcionalidade: Validação da funcionalidade de solicitação de crédito
    Descrição da funcionalidade: Esta funcionalidade tem como objetivo validar o processo de solicitação de crédito, garantindo que todas as etapas sejam concluídas corretamente e que os dados fornecidos pelo usuário sejam validados de acordo com as regras estabelecidas.

    Contexto: O usuário está logado e tem permissão para aprovar ou reprovar solicitações de crédito.
        Dado que eu acesse a página de solicitação de crédito

    Cenário: Aprovação de solicitação de crédito
        Quando eu preencher os campos obrigatórios com informações válidas
        E eu clicar no botão "Solicitar Crédito"
        Então a solicitação de crédito deve ser aprovada com sucesso
        E uma mensagem de confirmação deve ser exibida

    Cenário: Aprovação de crédito para clientes dentro do padrão de aprovação
        Quando eu preencher os dados do cliente com nome "João Silva", email "joao.silva@example.com", renda mensal "R$ 5.000,00" e valor solicitado "R$ 10.000,00"
        E eu clicar no botão "Solicitar Crédito"
        Então a solicitação de crédito deve ser aprovada com sucesso
        E uma mensagem de confirmação deve ser exibida