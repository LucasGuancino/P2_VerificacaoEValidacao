describe('Cenário 3: Adição de Produtos ao Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.wait(2000)
  })

  it('Teste da funcionalidade de adicionar produtos ao carrinho', () =>{
    cy.get('.inventory_item').first().find('.btn_primary').click()
    cy.wait(200)
    cy.get('.inventory_item').eq(1).find('.btn_primary').click()
    cy.wait(200)
    cy.get('.inventory_item').eq(2).find('.btn_primary').click()
    cy.wait(200)
    cy.get('.shopping_cart_badge').should('have.text', '3')
    cy.wait(200)
    cy.get('.shopping_cart_link').click()
    cy.wait(200)
    cy.get('.cart_item').should('have.length', 3)
    cy.wait(200)
    cy.get('.cart_item').first().should('contain', 'Sauce Labs Backpack')
    cy.get('.cart_item').eq(1).should('contain', 'Sauce Labs Bike Light')
    cy.get('.cart_item').eq(2).should('contain', 'Sauce Labs Bolt T-Shirt')
  })
})
