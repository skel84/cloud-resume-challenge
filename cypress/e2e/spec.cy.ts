describe('My E2E test', () => {
  it('Visits my resume page', () => {
    cy.visit('https://francesco.cislaghi.io')
    cy.contains('393428354734')
  })
})
