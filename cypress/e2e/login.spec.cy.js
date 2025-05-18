describe('Login', () => {
  const selectors = {
    loginButton: "li > .undefined",
    emailField: "[data-cy='email']",
    passwordField: "[data-cy='password']",
    signinButton: ".text-white",
    errorMessage: ".text-red-500",
  };

  beforeEach(() => {
    cy.visit('http://localhost:3000/heroes');
    cy.get("[href='/']").should('be.visible');
    cy.get(selectors.loginButton).click();
  });

  it('Deve fazer login com um usuário válido', () => {
    cy.get(selectors.emailField).type('test@test.com');
    cy.get(selectors.passwordField).type('test123');
    cy.get(selectors.signinButton).click();
    cy.get('a > img').should('be.visible');
  });

  it('Tentar fazer login com email inválido', () => {
    cy.get(selectors.emailField).type('teste@teste.com');
    cy.get(selectors.passwordField).type('test123');
    cy.get(selectors.signinButton).click();
    cy.get(selectors.errorMessage).should('contain', 'Invalid email or password');
  });

  it('Tentar fazer login com senha inválida', () => {
    cy.get(selectors.emailField).type('test@test.com');
    cy.get(selectors.passwordField).type('test1234');
    cy.get(selectors.signinButton).click();
    cy.get(selectors.errorMessage).should('contain', 'Invalid email or password');
  });

  it('Tentar fazer login com o campo de email vazio', () => {
    cy.get(selectors.passwordField).type('test123');
    cy.get(selectors.signinButton).click();
    cy.get(selectors.errorMessage).should('contain', 'Email is required');
  });

  it('Tentar fazer login com campo de senha vazio', () => {
    cy.get(selectors.emailField).type('test@test.com');
    cy.get(selectors.signinButton).click();
    cy.get(selectors.errorMessage).should('contain', 'Password is required');
  });

  it('Tentar fazer login com campos de email e senha vazios', () => {
    cy.get(selectors.signinButton).click();
    cy.get(selectors.errorMessage).eq(0).should('contain', 'Email is required');
    cy.get(selectors.errorMessage).eq(1).should('contain', 'Password is required');
  });
});



