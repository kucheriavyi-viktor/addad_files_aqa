context ('Check the cypress.io', () => {
  
    it('should perform UI testing', () => {
      cy.title().should('contain', 'Cypress.io');
      cy.get('.ds-input-container input[name="search"]').click();
      cy.get('.ds-input-container input[name="search"]').type('commands');
      cy.get('.ds-input-container input[name="search"]').type('{enter}');
      cy.get('.ds-sidemenu li').should('have.length.gt', 0);
      cy.get('.ds-sidemenu li').first().click();
      cy.get('h1').should('contain', 'Commands');
      cy.scrollTo('bottom');
      cy.contains('eq()').click();
      cy.get('h1').should('contain', 'eq()');
    });
  });

