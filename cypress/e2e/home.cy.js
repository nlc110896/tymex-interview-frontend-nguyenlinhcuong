describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('should load the homepage', async () => {
    cy.get('[e2e-id="search-input"]').then((search) => {
      cy.wrap(search).type('Metal');
    });
    cy.url()
      .should('include', 'text')
      .then((url) => {
        const queryParams = new URL(url).searchParams;
        const paramValue = queryParams.get('text');
        expect(paramValue).to.equal('Metal');
      });
  });
});
