/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que eu acesse a página de solicitação de crédito", () => {
  cy.visit("/");
});

When("eu preencher os campos obrigatórios com informações válidas", () => {
  cy.get('#nome').type('João da Silva');
  cy.get('#email').type('joao.silva@example.com');
  cy.get('#renda').type('5000');
  cy.get('#cpf').type('123.456.789-00');
  cy.get('#credito').type('10000');
});

When("eu preencher os dados do cliente com nome {string}, email {string}, renda mensal {string} e valor solicitado {string}", (nome, email, renda, credito) => {
  const rendaNumerica = renda.replace(/^R\$\s*/, '').replace(/\./g, '').replace(',', '.');
  const creditoNumerico = credito.replace(/^R\$\s*/, '').replace(/\./g, '').replace(',', '.');

  cy.get('#nome').type(nome);
  cy.get('#email').type(email);
  cy.get('#renda').type(rendaNumerica);
  cy.get('#cpf').type('123.456.789-00');
  cy.get('#credito').type(creditoNumerico);
});

When("eu clicar no botão {string}", (textoBotao) => {
  cy.get('input[type="submit"]')
    .should('have.value', textoBotao)
    .click();
});

Then("a solicitação de crédito deve ser aprovada com sucesso", () => {
  cy.get('#result')
    .should('be.visible')
    .and('have.class', 'success')
    .and('contain.text', 'APROVADA');
});

Then("uma mensagem de confirmação deve ser exibida", () => {
  cy.get('#result')
    .should('be.visible')
    .and('contain.text', 'Sua solicitação de crédito');
});