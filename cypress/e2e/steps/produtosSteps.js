import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("que estou logado na vitrine de produtos", () => {
    cy.visit("/")
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
})

Given("que estou logado na vitrine de produtos com o perfil {string}", (perfil) => {
    cy.visit("/")

    cy.fixture("usuarios").then((massa) => {
        const dados = massa[perfil];

        cy.get("#user-name").clear();
        if (dados.usuario) {
            cy.get("#user-name").type(dados.usuario);
        }

        cy.get("#password").clear();
        if (dados.senha) {
            cy.get("#password").type(dados.senha);
        }

        cy.get("#login-button").click();
    })
})

When("adiciono o produto {string} ao carrinho", (produto) => {
    cy.contains(".inventory_item", produto)
        .find("button")
        .click();
})

Then("o badge do carrinho deve mostrar {string}", (quantidade) => {
    cy.get(".shopping_cart_badge")
        .should("be.visible")
        .and("contain.text", quantidade);
})