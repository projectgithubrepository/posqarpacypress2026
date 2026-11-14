import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página inicial do SauceDemo", () => {
  cy.visit("/");
});

When("realizo login usando o usuário {string} e a senha {string}", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

Then("devo ser redirecionado para a vitrine de produtos", () => {
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("contain.text", "Products");
});

Then("devo ver a mensagem de erro {string}", (mensagemEsperada) => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", mensagemEsperada);
});

When("realizo login usando o perfil {string} da fixture", (perfil) => {
    cy.fixture("usuarios").then((massa) => {
        const usuario = massa[perfil];
        cy.get("#user-name").type(usuario.usuario);
        cy.get("#password").type(usuario.senha);
        cy.get("#login-button").click();
    });
});

// Método sem validação de digitação "cy.type" vazio.
// Then("devo ver a mensagem de erro correspondente ao perfil {string}", (perfil) => {
//   cy.fixture("usuarios").then((massa) => {
//     cy.get('[data-test="error"]')
//       .should("be.visible")
//       .and("contain.text", massa[perfil].msgErro);
//   });
// });

//Garante que o cy.type() não seja chamado com string vazia, evitando o erro "cy.type() must be called with a non-empty string"
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
  });
});