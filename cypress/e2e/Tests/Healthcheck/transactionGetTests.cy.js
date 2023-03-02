import { transactionGetRequests } from '../../../helpers/transactionApi/Get/transactionGetRequests'

describe('Test Category - Healthcheck', () => {

    before(() => {    
    })

    // context será utilizado para separar as categorias dos endpoints
    context('TransactionTypeV3 - Retorna registros de transações financeiras', () => {

        it('Healthcheck - Retorna registros de transações financeiras', () => {
            transactionGetRequests.getTransactionTypeV3()
        })
    })
})