describe('Cenário 2: Catálogo de Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.wait(2000)
  })

  it('Verificar se todos os produtos estão corretamente listados', () =>{
    cy.get('.inventory_item').should('have.length', 6)
  })

  it('Verificar se as informações dos produtos estão corretas', () => {
    cy.get('.inventory_item').each(($product) => {
      cy.wrap($product)
        .find('.inventory_item_name')
        .should('be.visible')
        .invoke('text')
        .should('not.be.empty')
      cy.wrap($product)
        .find('.inventory_item_price')
        .should('be.visible')
        .invoke('text')
        .should('not.be.empty')
      cy.wrap($product).find('.inventory_item_img').should('be.visible')
    })
  })

  it('Verificar Filtro da tela', () =>{
    cy.get('select.product_sort_container').select('az');
    cy.wait(2000)
    cy.get('select.product_sort_container').select('za');
    cy.wait(2000)
    cy.get('select.product_sort_container').select('lohi');
    cy.wait(2000)
    cy.get('select.product_sort_container').select('hilo');
    cy.wait(2000)
  })

})
