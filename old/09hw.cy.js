context ('Check the AIN web', () => {

  it('Open the main page and click startupds', () => {
    cy.visit('https://ain.ua/')
    cy.get('#header > div > div.header-bottom > button').click()
    cy.get('#menu-item-1057251 > a').click()
    cy.get('#menu-item-1123675 > a').click()
    //cy.click('#subbody > div.main-content > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div > a:nth-child(1) > h2')
    cy.url().should('contain', 'avtorski/')
  })
})