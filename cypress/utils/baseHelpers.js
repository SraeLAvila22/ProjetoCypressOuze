export const baseHelpers = {

    // Get - api/deck/new/shuffle/?deck_count=1 - retorna o número de baralhos que você deseja usar. O padrão é 1
    getShuffleTheCards: function() {
        const endpoint = '/api/deck/new/shuffle/?deck_count=1'
        
        return endpoint
    }
}