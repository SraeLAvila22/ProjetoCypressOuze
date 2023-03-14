import { baseHelpers } from '../../utils/baseHelpers'
import { schemaShuffleTheCards } from '../../fixtures/schema/DeckOfCards/schemaShuffleTheCards'

describe('DeckOfCardsGetTests', () => {
    
    context('Deck Of Cards - healthcheck', () => {
        
        it('ShuffleTheCardsGetTest', () => {
            cy.executeGet(
                baseHelpers.getShuffleTheCards()
            ).then(({ status }) => {
                expect(status).to.eq(200)
            })
        })
    })

    context('Deck Of Cards - Funcional', () => {
        
        it('functionalShuffleTheCardsGetTest', () => {
            cy.executeGet(
                baseHelpers.getShuffleTheCards()
            ).then(({ status, body }) => {
                expect(status).to.eq(200)
                expect(body.success).to.be.true
                expect(body.deck_id).to.not.be.null
                expect(body.remaining).to.eq(52)
                expect(body.shuffled).to.be.true
    
                cy.testSchema(schemaShuffleTheCards, body)
            })
        })
    })
})