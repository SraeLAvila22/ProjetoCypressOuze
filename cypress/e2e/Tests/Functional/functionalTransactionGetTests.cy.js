import { transactionGetRequests } from '../../../helpers/transactionApi/Get/transactionGetRequests'

describe('Test Category - Funcional', () => {

    context('TransactionTypeV3 - Retorna registros de transações financeiras', () => {
        
        it('Funcional - Retorna registros de transações financeiras', () => {
            transactionGetRequests.functionalGetTransactionTypeV3()
        })
    })
})