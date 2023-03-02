import Ajv from 'ajv'
import { definitionHelper } from '../utils/schemaDefinitions';

// ************************************************ COMANDOS PERSONALIZADOS CYPRESS *************************************************************** */

Cypress.Commands.add('executeGet', (url, headers = null, cookies = null) => {
    cy.request({
        failOnStatusCode: false,
        method: 'GET',
        url: url, 
        headers: headers,
        cookies: cookies
    })
})

Cypress.Commands.add('executePost', (url, bodyPayload, headers = null, cookies = null) => {
    cy.request({
        failOnStatusCode: false,
        method: 'POST',
        url: url, 
        headers: headers,
        body: bodyPayload,
        cookies: cookies
    })
})

Cypress.Commands.add('executePut', (url, bodyPayload, headers = null, cookies = null) => {
    cy.request({
        failOnStatusCode: false,
        method: 'PUT',
        url: url, 
        headers: headers,
        body: bodyPayload,
        cookies: cookies
    })
})

// ********************************************************* COMANDOS AUXILIARES ******************************************************************* */

Cypress.Commands.add('testSchema', (schema, response) => {

    const getSchemaError = avjErrors => {
        return cy.wrap(
            `campo: ${avjErrors[0]['instancePath']} é inválido. Erro: ${avjErrors[0]['message']}`
        )
    }

    const ajv = new Ajv()
    const validation = ajv.addSchema(definitionHelper).compile(schema)
    const valid = validation(response)

    if (!valid) {
        getSchemaError(validation.errors).then(schemaError => {
            throw new Error(schemaError)
        })
    } else 
        expect(valid, 'Validação de contrato').to.be.true
})