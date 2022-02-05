/// <reference types="cypress" />

describe('Header', () => {
  before(() => {
    cy.visit('/');
  });

  it.skip('should return to home view when home button clicked', () => {
    cy.get('button').contains('Create Character').click();

    cy.get('.menuBar').within(() => {
      cy.get('.home').click();
    });
  });
});
