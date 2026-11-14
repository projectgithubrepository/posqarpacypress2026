
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("que eu estou na página inicial do SauceDemo", () => {
  cy.visit("/")
})

When("realizo login usando o usuário {string} e a senha {string}", (username, password) => {
  cy.get("#user-name").type(username)
  cy.get("#password").type(password)
  cy.get("#login-button").click()
})

// massa = massa de dados (Data Driven)
// O if evita chamar cy.type() com uma string vazia.
When("realizo login usando o perfil {string} da fixture", (perfil) => {
  cy.fixture("usuarios").then((massa) => {
    const dados = massa[perfil];

    cy.get('[data-test="username"]').clear();
    if (dados.usuario) {
      cy.get('[data-test="username"]').type(dados.usuario);
    }

    cy.get('[data-test="password"]').clear();
    if (dados.senha) {
      cy.get('[data-test="password"]').type(dados.senha);
    }

    cy.get('[data-test="login-button"]').click();
  })
})

Then("devo ser redirecionado para a página de produtos", () => {
  cy.url().should("include", "/inventory.html")
  cy.get(".title").should("contain.text", "Products")
})

Then("devo ver uma mensagem de erro {string}", (mensagem) => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", mensagem)
})

Then("devo ver a mensagem de erro cadastrada para o perfil {string}", (perfil) => {
  cy.fixture("usuarios").then((massa) => {
    const dados = massa[perfil];

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain.text", dados.msgErro);
  })
})