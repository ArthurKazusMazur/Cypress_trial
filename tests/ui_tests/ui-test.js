import Chance from 'chance'

describe('Searching a prodact at https://store.google.com/us/', () => {
    before(() => {
    })
    it('Say smth', () => {
        cy.visit('https://store.google.com/us/')
       // cy.wait(2000)
        cy.get('.header-search-icon').click()
        cy.get('input[aria-label="Search Google Store"]').type(`Google Pixel Buds{enter}`)
        cy.get('a["/product/pixel_buds"]').should('exist')

    })

})
