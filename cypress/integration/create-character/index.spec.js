/// <reference types="cypress" />

describe('Create Character', () => {
    before(() => {
      cy.visit("/") 
    });

    it('should navigate to the Edit Character view', () => {
      cy.get('button').contains('Create Character').click();

      cy.contains('Edit Character').should('be.visible');
    });

    it('should update character name', () => {
      cy.get('div').contains('Name').siblings().click();
      cy.get('input').type('Mr Bigglesworth')

      cy.get('button').contains('Submit').click();

      cy.contains('Mr Bigglesworth').should('be.visible');
    });

    it('should update character strength', () => {
      cy.get('button').contains('Strength').click();
      cy.get('button').contains('19').click();

      cy.get('button').contains('Strength').parent().should('contain.text', '19');
    });

    it('should update character intelligence', () => {
      cy.get('button').contains('Intelligence').click();
      cy.get('button').contains('18').click();

      cy.get('button').contains('Intelligence').parent().should('contain.text', '18');
    });

    it('should update character willpower', () => {
      cy.get('button').contains('Willpower').click();
      cy.get('button').contains('17').click();

      cy.get('button').contains('Willpower').parent().should('contain.text', '17');
    })

    it('should update character health', () => {
      cy.get('button').contains('Health').click();
      cy.get('button').contains('16').click();

      cy.get('button').contains('Health').parent().should('contain.text', '16');
    })

    it('should update character agility', () => {
      cy.get('button').contains('Agility').click();
      cy.get('button').contains('15').click();

      cy.get('button').contains('Agility').parent().should('contain.text', '15');
    })

    it('should change uniform type from Normal to Winter', () => {
      cy.get('td').contains('Normal').click();
      cy.get('button').contains('Winter').click();

      cy.get('td').contains('Winter').should('exist');
    })

    it('should change gun level from 0 to 4', () => {
      cy.get('button').contains('Gun').click();
      cy.get('button').contains('4').click();

      cy.get('button').contains('Gun').parent().should('contain.text', '4');
    })

    it('should change hand level from 0 to 2', () => {
      cy.get('button').contains('Hand').click();
      cy.get('button').contains('2').click();

      cy.get('button').contains('Hand').parent().should('contain.text', '2');
    })

    it('should add helmet', () => {
      cy.get('td').contains('No Helmet').click();
      cy.get('td').contains('M1').click();

      cy.get('td').contains('M1').should('exist');
    })

    it('should add body armour', () => {
      cy.get('td').contains('No Vest').click();
      cy.get('td').contains('M69').click();

      cy.get('td').contains('M69').should('exist');
    })
})

