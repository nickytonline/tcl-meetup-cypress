describe('Add an item to the soon list', () => {
  it('should be able to visit the app', () => {
    cy.visit('/');
    cy.findByRole('heading', { name: /smart shopper/i }).should('exist');
    cy.findByRole('button', { name: /get started/i }).click();
    cy.findByRole('img', { name: /loading/i }).should('not.exist');
    cy.findByRole('link', { name: /start your list/i }).click();
    cy.findByRole('textbox', { name: /item name:/i }).type('milk');
    cy.findByRole('button', { name: /add item/i }).click();
  });
});
