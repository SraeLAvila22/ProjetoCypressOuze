import { baseHelpers } from '../../../helpers/baseHelpers'
import { schemaTransactionTypeV3 } from '../../../fixtures/schema/schemaTransactionTypeV3'

export const transactionGetRequests = {

    // Healthcheck
    getTransactionTypeV3: function() {
        cy.executeGet(
            baseHelpers.transactionTypeV3(),
            { 'x-api-key': 'lvwYIOV5IxX8tGDOQbteKlEF5cAxlw8L' }
        ).then(({ status }) => {
            expect(status).to.eq(200)
        })
    },

    // Funcional
    functionalGetTransactionTypeV3: function () {
        cy.executeGet(
            baseHelpers.transactionTypeV3(),
            { 'x-api-key': 'lvwYIOV5IxX8tGDOQbteKlEF5cAxlw8L' }
        ).then(({ status, body }) => {
            expect(status).to.eq(200)
            expect(body.content[0].platform).to.eq('PCH')
            expect(body.content[0].typeOperation).to.eq('ANNUITY')
            expect(body.content[0].accountingType).to.eq('DEBIT')

            cy.testSchema(schemaTransactionTypeV3, body)
        })
    }
}