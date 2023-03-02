export const definitionHelper = {
    $id: 'customDefinitions',
    definitions: {
        timestamap: {
            type: 'string',
            examples: ['2023-02-28T20:24:36'],
            pattern: '^(\\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01]))T((2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])$)'
        }
    }
}