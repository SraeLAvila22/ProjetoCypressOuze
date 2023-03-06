export const schemaShuffleTheCards = {
    type: 'object',
    required: [
        'success',
        'deck_id',
        'remaining',
        'shuffled'
    ],
    properties: {
        success: {
            type: 'boolean'
        },
        ['deck_id']: {
            type: 'string'
        },
        remaining: {
            type: 'integer'
        },
        shuffled: {
            type: 'boolean'
        }
    }
}