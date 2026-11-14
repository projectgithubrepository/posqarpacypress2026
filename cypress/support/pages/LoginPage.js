class LoginPage {
    elements = {
        inputUsuario: '[data-test="username"]',
        inputSenha: '[data-test="password"]',
        botaoLogin: '[data-test="login-button"]',
        mensagemErro: '[data-test="error"]'
    };
}

export default new LoginPage();