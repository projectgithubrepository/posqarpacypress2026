class ProductsPage {
    elements = {
        tituloPagina: '[data-test="title"]',
        cardProduto: '[data-test="inventory-item"]',
        nomeProduto: '[data-test="inventory-item-name"]',
        selectOrdenacao: '[data-test="product-sort-container"]',
        badgeCarrinho: '[data-test="shopping-cart-badge"]',
        linkCarrinho: '[data-test="shopping-cart-link"]'
    };

    validarVitrineVisivel() {
        cy.get(this.elements.tituloPagina).should("be.visible").and("have.text", "Products");
    }

    clicarBotaoDoProduto(nomeDoProduto) {
        cy.contains(this.elements.cardProduto, nomeDoProduto).find("button").click();
    }

    selecionarOrdenacao(textOpcao) {
        cy.get(this.elements.selectOrdenacao).select(textOpcao);
    }
}