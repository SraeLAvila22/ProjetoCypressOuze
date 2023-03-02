export const schemaTransactionTypeV3 = {
    type: 'object',
    required: [
        'content',
        'pageable',
        'totalPages',
        'totalElements',
        'last',
        'number',
        'sort',
        'size',
        'numberOfElements',
        'first',
        'empty'
    ],
    properties: {
        content: {
            type: 'array',
            items: {
                type: 'object',
                required: [
                    'id',
                    'transactionTypeIdPlatform',
                    'platform',
                    'name',
                    'value',
                    'fixedValue'
                ],
                properties: {
                    id: {
                        type: 'integer'
                    },
                    transactionTypeIdPlatform: {
                        type: 'integer'
                    },
                    platform: {
                        type: 'string'
                    },
                    name: {
                        type: 'string'
                    },
                    value: {
                        type: 'number'
                    },
                    fixedValue: {
                        type: 'boolean'
                    }
                }
            }
        },
        pageable: {
            type: 'object',
            required: [
                'sort',
                'offset',
                'pageNumber',
                'pageSize',
                'paged',
                'unpaged'
            ],
            properties: {
                sort: {
                    type: 'array',
                    items: {}
                },
                offset: {
                    type: 'integer'
                },
                pageNumber: {
                    type: 'integer'
                },
                pageSize: {
                    type: 'integer'
                },
                paged: {
                    type: 'boolean'
                },
                unpaged: {
                    type: 'boolean'
                }
            }
        },
        totalPages: {
            type: 'integer'
        },
        totalElements: {
            type: 'integer'
        },
        last: {
            type: 'boolean'
        },
        number: {
            type: 'integer'
        },
        sort: {
            type: 'array',
            items: {}
        },
        size: {
            type: 'integer'
        },
        numberOfElements: {
            type: 'integer'
        },
        first: {
            type: 'boolean'
        },
        empty: {
            type: 'boolean'
        }
    }
}