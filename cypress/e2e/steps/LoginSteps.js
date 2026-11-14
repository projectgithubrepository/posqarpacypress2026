import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("que eu estou na página inicial do SauceDemo", () => {
  cy.visit("/")
})

When("realizo login usando o usuário {string} e a senha {string}", (username, password) => {
  cy.get("#user-name").type(username)
  cy.get("#password").type(password)
  cy.get("#login-button").click()
})

//massa = massa de dados (que vem do data driven) = são apenas termos acadêmicos
When("realizo login usando o perfil {string} da fixture", (perfil) => {
    cy.fixture("usuarios").then((massa) =>{
        const usuario = massa[perfil];
        cy.get("#user-name").type(usuario.usuario);
        cy.get("#password").type(usuario.senha);
        cy.get("#login-button").click();

  })
})


Then("devo ser redirecionado para a página de produtos", () => {
  cy.url().should("include", "/inventory.html")
  cy.get(".title").should("contain.text", "Products")
})

Then("devo ser redirecionado para a vitrine de produtos", () => {
  cy.url().should("include", "/inventory.html")
  cy.get(".title").should("contain.text", "Products")
})

Then("devo ver uma mensagem de erro {string}", (mensagem) => {
  cy.get('[data-test="error"]')
    .should("be.visible")
    .and("contain.text", mensagem)
})



