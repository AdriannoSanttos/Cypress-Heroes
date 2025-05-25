 import { userData } from '../support/userData'

const selectors = {
  likeButton: "[data-cy='like']",
  moneyButton: "[data-cy='money']",
  messageText: ".text-gray-500",
  heroName: ".text-gray-800",
  heroBorder: ".border-gray-300"
};

describe('Home Screen', () => {
  it('Na tela inicial ao clicar nos botões like e cifrão dos heróis deve aparecer uma mensagem de erro', () => {
    cy.visit(userData.baseUrl)

    for (let i = 0; i <= 6; i++) {
      cy.get(selectors.likeButton).eq(i).click()
      cy.get(selectors.messageText).eq(9).should('contain', userData.likeError)

      cy.get(selectors.heroName).eq(15).click()

      cy.get(selectors.moneyButton).eq(i).click()
      cy.get(selectors.messageText).eq(9).should('contain', userData.hireError)

      cy.get(selectors.heroBorder).eq(15).click()
    }
  })
})
