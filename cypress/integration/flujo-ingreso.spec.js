/// <reference types="Cypress"/>

describe('Flujo para ingresar a la app',()=>{
    it("Ingreso",()=>{
        cy.visit('http://localhost:3000');
        cy.get('[data-testid="input-username"]').clear().type("Andres")
        cy.get('[data-testid="password-username"]').clear().type("1234")
        cy.get('[data-testid="continue"]').click();
    })
})