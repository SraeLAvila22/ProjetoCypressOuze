import { deckOfCardsGetRequests } from '../../../Helpers/DeckOfCards/Get/deckOfCardsGetRequests'

describe('Test Category - Healthcheck', () => {

    context('Deck of Cards', () => {
        it('Healthcheck - Shuffle the Cards', () => {
            deckOfCardsGetRequests.shuffleTheCardsGetRequests()
        })
    })
})