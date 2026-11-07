/// <reference types="cypress" />

context('Testes de logins válidos', () => {
    
    //pré-requisito
    //o que ou onde e eu devo ter/estar para iniciar os testes.

    beforeEach(() => {
        cy.visit('/')
    });

    //desafio 3 pegar o input + label
    it('desafio 3 pegar o input pelo data-cy', () => {
        //ao utilizar hook nativo do javascript n preciso chamar a url a cada it, faz um global
        //cy.visit('/') //puxa a base url do arquivo de cypress.config.js
                cy.get('[data-cy="input-username"]')
                    .should('have.attr', 'data-cy', 'input-username')
                    .prev('label[for="username"]')
                    .should('have.text', 'Treinador:');
        cy.log('Deu bom')
    });

    //desafio 4 pegar os botoes da pag e depois o especifico
      it('desafio 4 encontra o botao Entrar e valida a classe btn-primary', () => {
        //cy.visit('/')
          cy.get('button')
             .contains('Entrar')
             .should('have.text', 'Entrar')
             .and('have.class', 'btn-primary');
        cy.log('Deu bom')
     });
});