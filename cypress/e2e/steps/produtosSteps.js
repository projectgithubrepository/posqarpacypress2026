import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou logado na vitrine de produtos sem padrao com o perfil {string}", (perfil) => {
  // DOR 1: Repetindo todos os cy.get() de login que já tínhamos feito no outro arquivo!
  cy.visit("/");
  cy.fixture("usuarios").then((massa) => {
    cy.get('[data-test="username"]').type(massa[perfil].usuario);
    cy.get('[data-test="password"]').type(massa[perfil].senha);
    cy.get('[data-test="login-button"]').click();
  });
});

Given("que estou logado na vitrine de produtos com o perfil {string}", (perfil) => {

  AuthActions.realizarLoginRapidoComFixture(perfil);
});