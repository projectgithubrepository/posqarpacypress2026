/// <reference types="cypress" />

context('Testes de logins válidos', () => {
    
    it('Logar um pokemon como um Treinador Qualquer', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        cy.get('[data-cy="input-username"]').type('Angelo');
        cy.get('[data-cy="input-password"]').type('123456');
        cy.get('[data-cy="input-pokeinit"]').type('Pikachu');
        cy.get('[data-cy="botao-login"]').click();
        cy.get('#mensagem-feedback').should('have.text','Login de Ash TREINADOR QUALQUER efetuado com sucesso!')
        cy.get('#mensagem-feedback').should('contain','QUALQUER')
    });

    //tenho que usar um treinador da lista e fora dela 
    it('Logar um pokemon como um Treinador Qualquer', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        cy.get('#list-users')
        .find('ul > li')
        .first()
        .invoke('text')
        .then((Text) => Text.trim())
        .as('treinador')

        cy.get('@treinador').then((treinador) => {
            cy.get.apply('[data-cy="input-username"]').type(treinador);
            cy.log(`Treinador coletado foi: ${treinador}`);
        });
    });

     it('Logar um pokemon como um Treinador Clássico com JS', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        cy.get('#secao-users')
        .find('li')
        .first()
        .invoke('text')
        .then((Text) => {
            treinador - Text.trim();
            cy.log(`Variável treinador: ${treinador}`);
        });
    })
});