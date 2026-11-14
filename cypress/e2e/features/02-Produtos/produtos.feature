# language: pt
Funcionalidade: Vitrine de Produtos

    Contexto:
        Dado que estou logado na vitrine de produtos sem padrao com o perfil "valido"

        Cenário: Adicionar um produto ao carrinho pela vitrine
            Quando adiciono o produto "Sauce Labs Backpack" ao carrinho
            Então o badge do carrinho deve mostrar "1"

        Cenário: Remover um produto adicionado direto na vitrine
            Quando adiciono o produto "Sauce Labs Backpack" ao carrinho
            E removo o produto "Sauce Labs Backpack" do carrinho
            Então o badge do carrinho deve mostrar "0"

        Cenário: Ordenar produtos do menor para o maior preço
            Quando ordeno os produtos do menor para o maior preço
            Então o primeiro produto da vitrine deve ser "Sauce Labs Onesie"