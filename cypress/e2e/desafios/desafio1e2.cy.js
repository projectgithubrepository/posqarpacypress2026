/// <reference types="cypress" />

context('Testes de logins válidos', () => {
    
    //pré-requisito
    //o que ou onde e eu devo ter/estar para iniciar os testes.

    beforeEach(() => {
        cy.visit('/')
    });

    //desafio 1 pegar o item bulbassauro
    it('desafio 1 pegar o item bulbassauro', () => {
        //ao utilizar hook nativo do javascript n preciso chamar a url a cada it, faz um global
        //cy.visit('/') //puxa a base url do arquivo de cypress.config.js
        cy.get('#list-poke')
        .should('exist')
        .contains('Bulbassauro');
    });

    //desafio 2 pegar o item especial (pikachu)
     it('desafio 2 pegar o item especial (pikachu)', () => {
        //cy.visit('../../index.html')
        cy.get('#list-poke li.pokemon-especial')
        .should('exist')
        .contains('Pikachu');
    });
});