/// <reference types="cypress" />
describe('Cenário 1: Login e Navegação', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');
    cy.get('[data-test="username"]').type('standard_user');
    cy.wait(2000)
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click();
    cy.wait(2000)
  })

  it('Navegar para o LogOut', () =>{
    cy.get('#react-burger-menu-btn').click();
    cy.wait(2000)
    cy.get('#logout_sidebar_link').click();
    cy.wait(2000)
  })
  
  it('Verificar elementos visiveis', () => {
    cy.get('#react-burger-menu-btn').click();
    cy.wait(2000);
    cy.get('#inventory_sidebar_link').should('be.visible');
    cy.get('#about_sidebar_link').should('be.visible');
    cy.get('#logout_sidebar_link').should('be.visible');
    cy.get('#reset_sidebar_link').should('be.visible');
    cy.get('#react-burger-cross-btn').click();
    cy.wait(2000);
    cy.get('[data-test="product_sort_container"]').should('be.visible');
    cy.get('.shopping_cart_link').should('be.visible');
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.get('.social_twitter > a').should('be.visible');
    cy.get('.social_facebook > a').should('be.visible');
    cy.get('.social_linkedin > a').should('be.visible');
  })

})