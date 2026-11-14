import loginPage from './LoginPage';

class AuthActions {
    realizarLoginRapidoComFixture(perfil) {
        cy.visit("/");
        cy.fixture("usuarios").then((massa) => {
            cy.get('[data-test="username"]').type(massa[perfil].usuario);
            cy.get('[data-test="password"]').type(massa[perfil].senha);
            cy.get('[data-test="login-button"]').click();
        });
    }

    realizarLoginRapidoComFixtureUsandoPage(perfil) {
        cy.fixture("usuarios").then((massa) => {
            const usuario = massa[perfil];
            loginPage.acessarPagina();
            loginPage.preencherCredenciais(usuario.usuario, usuario.senha);
            loginPage.clicarEntrar();
        });
    }
}