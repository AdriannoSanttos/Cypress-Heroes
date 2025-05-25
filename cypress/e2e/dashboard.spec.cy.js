const selectors = {
  homeLink: "[href='/']",
  navButton: 'li > .undefined',
  emailInput: "[data-cy='email']",
  passwordInput: "[data-cy='password']",
  submitButton: '.text-white',
  logoImage: 'a > img',
  dashboardCard: '.shadow-md',
  heroName: "[data-cy='name']",
  heroImage: (name) => `[alt='${name}']`,
  hireButton: "[data-cy='money']",
  hireText: 'p.text-sm',
  hireHeroName: '.gap-4 > .flex-col > .mb-1',
  logoutButton: '.text-gray-800'
};

describe('Deshboard', () => {
  it('Deve fazer login com sucesso e redirecionamento', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectors.homeLink).should('be.visible')
    cy.get(selectors.navButton).click()
    cy.get(selectors.emailInput).type('test@test.com')
    cy.get(selectors.passwordInput).type('test123')
    cy.get(selectors.submitButton).click()
    cy.get(selectors.logoImage).should('be.visible')
  });

  it('Deve verificar layout do Dashboard', () => {
    cy.visit('http://localhost:3000/heroes');
    cy.get(selectors.homeLink).should('be.visible')
    cy.get(selectors.navButton).click()
    cy.get(selectors.emailInput).type('test@test.com')
    cy.get(selectors.passwordInput).type('test123')
    cy.get(selectors.submitButton).click()
    cy.get(selectors.logoImage).should('be.visible')
    cy.get(selectors.navButton).should('be.visible')
    cy.get(selectors.dashboardCard).eq(0).should('be.visible')
    cy.get(selectors.dashboardCard).eq(1).should('be.visible')
    cy.get(selectors.dashboardCard).eq(2).should('be.visible')
    cy.get(selectors.dashboardCard).eq(3).should('be.visible')
    cy.get(selectors.dashboardCard).eq(4).should('be.visible')
    cy.get(selectors.dashboardCard).eq(5).should('be.visible')
    cy.get(selectors.dashboardCard).eq(6).should('be.visible')
  });

  it('Deve verificar que existem exatamente 7 cards no Dashboard', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectors.homeLink).should('be.visible')
    cy.get(selectors.navButton).click()
    cy.get(selectors.emailInput).type('test@test.com')
    cy.get(selectors.passwordInput).type('test123')
    cy.get(selectors.submitButton).click()
    cy.get(selectors.logoImage).should('be.visible')
    cy.get(selectors.dashboardCard)
      .should('have.length', 7)
      .each(($card) => {
        expect($card).to.be.visible;
        expect($card.text().trim()).to.not.be.empty
      })
  })

  it('Deve Verificar nome e imagem de heróis (1 ao 7)', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectors.homeLink).should('be.visible')
    cy.get(selectors.navButton).click()
    cy.get(selectors.emailInput).type('test@test.com')
    cy.get(selectors.passwordInput).type('test123')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.dashboardCard).eq(0).should('be.visible')
    cy.get(selectors.heroImage('The Smoker')).should('be.visible')
    cy.get(selectors.heroName).eq(0).should('contain', 'The Smoker')

    cy.get(selectors.heroImage('Warp Speed')).should('be.visible')
    cy.get(selectors.heroName).eq(1).should('contain', 'Warp Speed')

    cy.get(selectors.heroImage('Cyonic')).should('be.visible')
    cy.get(selectors.heroName).eq(2).should('contain', 'Cyonic')

    cy.get(selectors.heroImage('The Librarian')).should('be.visible')
    cy.get(selectors.heroName).eq(3).should('contain', 'The Librarian')

    cy.get(selectors.heroImage('Mr Angular')).should('be.visible')
    cy.get(selectors.heroName).eq(4).should('contain', 'Mr Angular')

    cy.get(selectors.heroImage('Collect Call Paul')).should('be.visible')
    cy.get(selectors.heroName).eq(5).should('contain', 'Collect Call Paul')

    cy.get(selectors.heroImage('Fly Girl')).should('be.visible')
    cy.get(selectors.heroName).eq(6).should('contain', 'Fly Girl')
  });

  it('Deve verificar que o botão cifrão para os heróis de 1 ao 7 e fazer logout', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get(selectors.homeLink).should('be.visible')
    cy.get(selectors.navButton).click()
    cy.get(selectors.emailInput).type('test@test.com')
    cy.get(selectors.passwordInput).type('test123')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.hireButton).eq(0).click()
    cy.get(selectors.hireText).should('contain', 'Hire this hero for 94?')
    cy.get(selectors.heroImage('The Smoker')).eq(1).should('be.visible')
    cy.get(selectors.hireHeroName).should('contain', 'The Smoker')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.hireButton).eq(1).click()
    cy.get(selectors.hireText).should('contain', 'Hire this hero for 50?')
    cy.get(selectors.heroImage('Warp Speed')).eq(1).should('be.visible')
    cy.get(selectors.hireHeroName).should('contain', 'Warp Speed')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.hireButton).eq(2).click()
    cy.get(selectors.hireText).should('contain', 'Hire this hero for 95?')
    cy.get(selectors.heroImage('Cyonic')).eq(1).should('be.visible')
    cy.get(selectors.hireHeroName).should('contain', 'Cyonic')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.hireButton).eq(3).click()
    cy.get(selectors.hireText).should('contain', 'Hire this hero for 62?')
    cy.get(selectors.heroImage('The Librarian')).eq(1).should('be.visible')
    cy.get(selectors.hireHeroName).should('contain', 'The Librarian')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.hireButton).eq(4).click()
    cy.get(selectors.hireText).should('contain', 'Hire this hero for 94?')
    cy.get(selectors.heroImage('Mr Angular')).eq(1).should('be.visible')
    cy.get(selectors.hireHeroName).should('contain', 'Mr Angular')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.hireButton).eq(5).click()
    cy.get(selectors.hireText).should('contain', 'Hire this hero for 98?')
    cy.get(selectors.heroImage('Collect Call Paul')).eq(1).should('be.visible')
    cy.get(selectors.hireHeroName).should('contain', 'Collect Call Paul')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.hireButton).eq(6).click()
    cy.get(selectors.hireText).should('contain', 'Hire this hero for 78?')
    cy.get(selectors.heroImage('Fly Girl')).eq(1).should('be.visible')
    cy.get(selectors.hireHeroName).should('contain', 'Fly Girl')
    cy.get(selectors.submitButton).click()

    cy.get(selectors.logoutButton).eq(0).click()
  });
});
