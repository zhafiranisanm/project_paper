describe('Create Invoice',() => {
  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'))
    cy.login(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
})


  it('User create invoice', () =>{

    const getIframeDocumentPayment = () => {
      return cy
      .get('iframe[class="spec-iframe"]')
      .its('0.contentDocument').should('exist')
    }

  const getIframeBodyPayment = () => {
      // get the document
      return getIframeDocumentPayment()
      // automatically retries until body is loaded
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
    }

    cy
    getIframeBodyPayment().find('.scrollbar.ng-star-inserted').should('have.text', 'Invoice').click({force:true})
    getIframeBodyPayment().find('.ps-content').eq(2).click({force:true})
    getIframeBodyPayment().find('input[ahref="#/invoicer/invoice"]').should('have.text', 'Invoice Penjualan').click({force:true})
    .get('.paper-button.blue-button.ng-tns-c586-3').contains(' Buat Invoice Baru ').click()
    .get('input[type="text"]').contains('No Data Selected').click()
    .get('.ng-option-label.ng-star-inserted').contains('Animator X').click()
    .get('#btn_product_list_modal').click()
    .get('tr').eq(0).should('contain', 'SKU0001').click()
    .get('button[type="button"]').contains('Simpan').click()  
    .get('#quantity').click()
    .type('5')
    .get('#single-button').click()
    .get('ul>li').eq(1).click()
    .get('button[type="button"]').contains('Nanti Saja').click()  



  })

})